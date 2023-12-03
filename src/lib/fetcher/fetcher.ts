import { ZodError, type ZodObject } from 'zod';
import { type keyPath } from '@/constant/path';
import { type HttpResponse } from '@/type/httpResponse';
import { HttpError } from '@/util/error';

/**
 * @description バリデーションエラーをHttpResponseに変換する
 * @param {unknown} validationError - バリデーションエラー
 * @param {boolean} isThrowError - エラーをthrowするかどうか
 * @returns {Promise<HttpResponse<T>>} - HttpResponse
 * @throws {HttpError} - isThrowErrorがtrueの場合、HttpErrorをthrowする
 * @throws {unknown} - validationErrorがZodError以外の場合、validationErrorをthrowする
 */
export const transformValidation = async <T>(validationError: unknown, isThrowError: boolean) => {
  if (validationError instanceof ZodError) {
    const error: HttpResponse<T> = {
      payload: undefined,
      error: validationError,
      status: 400,
    };

    if (isThrowError) throw new HttpError(error);
    return error;
  }

  throw validationError;
};

/**
 * @description fetcherのレスポンスをHttpResponseに変換する
 * @param {Response} response - fetchレスポンス
 * @param {boolean} isThrowError - 200 ~ 299以外のステータスコードの場合にエラーをthrowするかどうか
 * @returns {Promise<HttpResponse<T>>} - HttpResponse
 * @throws {HttpError} - isThrowErrorがtrueの場合、HttpErrorをthrowする
 */
export const transformResponse = async <T>(
  response: Response,
  isThrowError: boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validationSchema?: ZodObject<any>,
): Promise<HttpResponse<T>> => {
  const json = await response.json();

  if (validationSchema != null) {
    try {
      validationSchema.parse(json);
    } catch (error) {
      return transformValidation(error, isThrowError);
    }
  }

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

/**
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

/**
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validationSchema?: ZodObject<any>,
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
    .then(async (response) => await transformResponse<T>(response, isThrowError, validationSchema))
    .catch(async (error: Error) => await transformErrorResponse<T>(error, isThrowError));
};
