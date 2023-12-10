import { ZodError } from 'zod';
import { fetcher, transformErrorResponse, transformResponse, transformValidation } from '@/lib/fetcher/fetcher';
import { HttpError } from '@/util/error';

type ResponseType = {
  message: string;
};

describe('fetcher', () => {
  describe('transformValidation', () => {
    it('validationErrorがZodErrorのインスタンスの場合、HttpResponseに変換された値を返すこと', async () => {
      const validationError = new ZodError([]);
      const result = await transformValidation<ResponseType>(validationError, false);

      expect(result).toEqual({
        payload: undefined,
        error: validationError,
        status: 400,
      });
    });

    it('isThrowErrorがtrueの場合、HttpErrorをthrowすること', async () => {
      const validationError = new ZodError([]);
      await expect(transformValidation(validationError, true)).rejects.toThrow(HttpError);
    });

    it('validationErrorがZodErrorのインスタンスでない場合、validationErrorをthrowすること', async () => {
      const validationError = new Error('Some error');
      await expect(transformValidation(validationError, false)).rejects.toThrow(validationError);
    });
  });

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

      it('isThrowErrorがtrueの場合、HttpResponseをthrowすること', async () => {
        let err;
        try {
          await transformResponse(mockErrorResponse, true);
        } catch (error) {
          err = error;
        } finally {
          expect(err).toMatchObject({
            error: { message: 'Error' },
            payload: undefined,
            status: 404,
          });
        }
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
      it('errorがHttpResponseの場合、isThrowErrorがfalseでもHttpErrorをスローすること', async () => {
        const error = {
          error: { message: 'Error' },
          payload: undefined,
          status: 404,
        };
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

  describe('fetcher', () => {
    it('httpResponseをreturnする', async () => {
      const mockResponse: Response = {
        json: jest.fn().mockResolvedValue({ message: 'Success' }),
        status: 200,
        ok: true,
      } as unknown as Response;

      global.fetch = jest.fn().mockResolvedValue(mockResponse);

      const result = await fetcher<ResponseType>('https://hoge', { method: 'GET' });

      expect(result).toEqual({
        payload: { message: 'Success' },
        error: undefined,
        status: 200,
      });
    });

    it('isThrowErrorがtrueのとき、HttpErrorをthrowする', async () => {
      const mockErrorResponse: Response = {
        json: jest.fn().mockResolvedValue({ name: 'HttpError', message: 'Error' }),
        status: 404,
        ok: false,
      } as unknown as Response;

      global.fetch = jest.fn().mockResolvedValue(mockErrorResponse);

      const throwError = new HttpError({
        payload: undefined,
        error: { name: 'HttpError', message: 'Error' },
        status: 404,
      });

      await expect(fetcher<ResponseType>('https://hoge', { method: 'GET' }, { isThrowError: true })).rejects.toThrow(
        throwError,
      );
    });
  });
});
