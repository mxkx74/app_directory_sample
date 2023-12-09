// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Params = string | string[][] | Record<string, any> | URLSearchParams;

export const pathBuilder = (endpoint: string, params?: Params) => {
  const path = params != null ? `?${new URLSearchParams(params).toString()}` : '';

  return `${endpoint}${path}`;
};
