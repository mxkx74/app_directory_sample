import { type keyPath } from '@/constant/path';
import { type HttpResponse } from '@/type/httpResponse';
import { HttpError } from '@/util/error';

/** tsDoc
 * @description fetcherのレスポンスをHttpResponseに変換する
 * @param {Response} response - fetchレスポンス
 * @param {boolean} isThrowError - 200 ~ 299以外のステータスコードの場合にエラーをthrowするかどうか
 * @returns {Promise<HttpResponse<T>>} - HttpResponse
 * @throws {HttpError} - isThrowErrorがtrueの場合、HttpErrorをthrowする
 */
export const transformResponse = async <T>(response: Response, isThrowError: boolean): Promise<HttpResponse<T>> => {
  const json = await response.json();

  // isThrowErrorがtrueで200 ~ 299以外のステータスコードの場合はcatchで処理する
  if (!response.ok) {
    const data: HttpResponse<T> = {
      payload: undefined,
      error: json,
      status: response.status,
    };
    if (isThrowError) {
      throw new HttpError(data);
    }
    return data;
  }

  return {
    payload: json,
    error: undefined,
    status: response.status,
  };
};

/** tsDoc
 * @description fetcherのエラーをHttpResponseに変換する
 * @param {Error} error - fetcherのエラー
 * @param {boolean} isThrowError - エラーをthrowするかどうか
 * @returns {Promise<HttpResponse<T>>} - HttpResponse
 */
export const transformErrorResponse = async <T>(error: Error, isThrowError: boolean): Promise<HttpResponse<T>> => {
  if (!(error instanceof HttpError)) {
    const data: HttpResponse<T> = {
      payload: undefined,
      error,
      status: -1,
    };
    if (isThrowError) throw new HttpError(data);
    return data;
  }
  throw error;
};

/** tsDoc
 * @description fetcher
 * @param {RequestInfo} input - fetchの第一引数
 * @param {RequestInit} init - fetchの第二引数
 * @param {boolean} isThrowError - エラーをthrowするかどうか
 * @returns {Promise<HttpResponse<T>>} - HttpResponse
 * @throws {HttpError} - isThrowErrorがtrueの場合、HttpErrorをthrowする
 */
export const fetcher = async <T>(
  input: RequestInfo,
  init?: RequestInit & { next?: { revalidate: number; tags?: keyPath[] } },
  isThrowError = false,
): Promise<HttpResponse<T>> => {
  return fetch(input, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    next: {
      ...init?.next,
    },
  })
    .then(async (response) => await transformResponse<T>(response, isThrowError))
    .catch(async (error: Error) => await transformErrorResponse<T>(error, isThrowError));
};
