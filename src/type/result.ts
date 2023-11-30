export type Success<T> = {
  isSuccess: true;
  data: T;
};

export type Failure<T> = {
  isSuccess: false;
  data: T;
};

export const success = <T>(data: T): Success<T> => ({
  isSuccess: true,
  data,
});

export const failure = <T>(data: T): Failure<T> => ({
  isSuccess: false,
  data,
});

export type Result<T, U> = Success<T> | Failure<U>;
