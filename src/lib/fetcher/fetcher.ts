import { type ZodArray, ZodError, type ZodObject } from 'zod';
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
 * @description fetchのレスポンスをHttpResponseに変換する
 * @param {Response} response - fetchのレスポンス
 * @param {boolean} isThrowError - エラーをthrowするかどうか
 * @param {ZodObject} validationSchema - バリデーションスキーマ
 * @returns {Promise<HttpResponse<T>>} - HttpResponse
 * @throws {HttpError} - isThrowErrorがtrueの場合、HttpErrorをthrowする
 */
export const transformResponse = async <T>(
  response: Response,
  isThrowError: boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validationSchema?: ZodObject<any> | ZodArray<any>,
): Promise<HttpResponse<T>> => {
  const json = await response.json();

  // isThrowErrorがtrueで200 ~ 299以外のステータスコードの場合はcatchで処理する
  if (!response.ok) {
    const data: HttpResponse<T> = {
      payload: undefined,
      error: { ...json.error, status: response.status },
      status: response.status,
    };
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    if (isThrowError) throw data;

    return data;
  }

  if (validationSchema != null) {
    try {
      validationSchema.parse(json);
    } catch (error) {
      return transformValidation(error, isThrowError);
    }
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
export const transformErrorResponse = async <T>(error: unknown, isThrowError: boolean): Promise<HttpResponse<T>> => {
  if (error instanceof Error) {
    const data: HttpResponse<T> = {
      payload: undefined,
      error,
      status: -1,
    };
    if (isThrowError) throw new HttpError(data);
    return data;
  }

  throw new HttpError(error as HttpResponse<T>);
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
  options?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validationSchema?: ZodObject<any> | ZodArray<any>;
    token?: string;
    isThrowError?: boolean;
  },
): Promise<HttpResponse<T>> => {
  const { isThrowError = false, token, validationSchema } = options ?? {};
  return fetch(input, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    next: {
      ...init?.next,
    },
  })
    .then(async (response) => transformResponse<T>(response, isThrowError, validationSchema))
    .catch(async (error: unknown) => transformErrorResponse<T>(error, isThrowError));
};
