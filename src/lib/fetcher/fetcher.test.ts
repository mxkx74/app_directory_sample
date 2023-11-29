import { transformErrorResponse, transformResponse } from '@/lib/fetcher/fetcher';
import { HttpError } from '@/util/error';

type ResponseType = {
  message: string;
};

describe('fetcher', () => {
  describe('transformResponse', () => {
    describe('正常系', () => {
      let mockResponse: Response;

      beforeAll(() => {
        mockResponse = {
          json: jest.fn().mockResolvedValue({ message: 'Success' }),
          status: 200,
          ok: true,
        } as unknown as Response;
      });

      it('HttpResponseに変換された値をを返すこと', async () => {
        const result = await transformResponse<ResponseType>(mockResponse, false);

        expect(result).toEqual({
          payload: { message: 'Success' },
          error: undefined,
          status: 200,
        });
      });

      it('isThrowErrorがtrueの場合でもthrowされないこと', async () => {
        await expect(transformResponse(mockResponse, true)).resolves.not.toThrow();
      });
    });

    describe('異常系', () => {
      let mockErrorResponse: Response;

      beforeAll(() => {
        mockErrorResponse = {
          json: jest.fn().mockResolvedValue({ message: 'Error' }),
          status: 404,
          ok: false,
        } as unknown as Response;
      });

      it('isThrowErrorがtrueの場合、HttpErrorをthrowすること', async () => {
        await expect(transformResponse(mockErrorResponse, true)).rejects.toThrow(HttpError);
      });

      it('isThrowErrorがfalseの場合、HttpResponseに変換された値を返すこと', async () => {
        const result = await transformResponse(mockErrorResponse, false);

        expect(result.payload).toBeUndefined();
        expect(result.error).toEqual({ message: 'Error' });
        expect(result.status).toBe(404);
      });
    });
  });

  describe('transformErrorResponse', () => {
    describe('httpエラー', () => {
      it('errorがHttpErrorのインスタンスの場合、isThrowErrorがfalseでもHttpErrorをスローすること', async () => {
        const error = new HttpError({ payload: undefined, error: new Error('Some error'), status: 500 });
        await expect(transformErrorResponse(error, false)).rejects.toThrow(HttpError);
      });
    });

    describe('ネットワークエラーなどhttpエラー以外', () => {
      it('isThrowErrorがfalseの場合はデータを返すこと', async () => {
        const error = new Error('Some error');
        const result = await transformErrorResponse(error, false);

        expect(result.payload).toBeUndefined();
        expect(result.error).toEqual(error);
        expect(result.status).toBe(-1);
      });

      it('isThrowErrorがtrueの場合はデータをthrowすること', async () => {
        const error = new Error('Some error');
        const throwError = new HttpError({ payload: undefined, error, status: -1 });
        await expect(transformErrorResponse(error, true)).rejects.toThrow(throwError);
      });
    });
  });
});
