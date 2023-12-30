import { useMemo } from 'react';
import {
  type QueryKey,
  type UseQueryOptions,
  type UseSuspenseQueryOptions,
  useQuery,
  useSuspenseQuery,
  type UseQueryResult,
  type UseSuspenseQueryResult,
} from '@tanstack/react-query';
import { type HttpError } from '@/util/error';

export const useCustomQuery = <
  TQueryFnData = unknown,
  TError = HttpError<TQueryFnData>,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
  TSuspense extends boolean = true,
>({
  queryKey,
  queryFn,
  isSuspense,
  options,
}: {
  queryKey: TQueryKey;
  queryFn: (params: TQueryKey[1]) => Promise<TQueryFnData>;
  isSuspense?: TSuspense;
  options?: Omit<
    TSuspense extends true
      ? UseSuspenseQueryOptions<TQueryFnData, TError, TData, TQueryKey>
      : UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryFn' | 'queryKey'
  >;
}) => {
  const queryHook = isSuspense ? useSuspenseQuery : useQuery;
  const query = queryHook<TQueryFnData, TError, TData, TQueryKey>({
    queryKey,
    queryFn,
    ...options,
  });

  return useMemo(() => ({ ...query }), [query]) as TSuspense extends true
    ? UseSuspenseQueryResult<TData, TError>
    : UseQueryResult<TData, TError>;
};
