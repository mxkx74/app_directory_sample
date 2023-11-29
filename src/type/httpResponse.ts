export type HttpResponse<T, K extends Error = Error> = {
  payload?: T;
  error?: K;
  status: number;
};
