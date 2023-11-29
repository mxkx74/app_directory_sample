import { type HttpResponse } from '@/type/httpResponse';

export class HttpError<T> extends Error {
  readonly data?: HttpResponse<T>;

  constructor(data: HttpResponse<T>) {
    const { message, name, stack, cause } = data.error ?? {};
    super(message);
    this.name = name ?? 'HttpError';
    this.stack = stack;
    this.cause = cause;
    this.data = data;
  }
}
