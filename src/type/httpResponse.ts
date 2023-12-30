export type HttpResponse<T = never, K extends Error = Error> = {
  payload?: T;
  error?: K;
  status: number;
};
