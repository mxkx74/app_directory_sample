import { type HttpResponse } from '@/type/httpResponse';

export class HttpError<T = never> extends Error {
  readonly status: number = 400;

  constructor(data: HttpResponse<T>) {
    const { message, name, stack, cause } = data.error ?? {};
    super(message);
    this.name = name ?? 'HttpError';
    this.stack = stack;
    this.cause = cause;
    this.status = data.status;
  }
}
