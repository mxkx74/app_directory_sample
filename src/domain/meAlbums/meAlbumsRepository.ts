import { path } from '@/constant/path';
import { fetcher } from '@/lib/fetcher';
import { pathBuilder } from '@/util/path';
import { meAlbumsModelSchema, type MeAlbumsModel } from './meAlbumsModel';

export const meAlbumsRepository = () => {
  const endpoint = path.user.meAlbums;

  return {
    async find(token: string, params?: { limit: number; offset: number }, isThrowError = false) {
      const url = pathBuilder(endpoint, params);
      return fetcher<MeAlbumsModel>(url, undefined, {
        validationSchema: meAlbumsModelSchema,
        isThrowError,
        token,
      });
    },
  };
};

export type MeAlbumsRepository = ReturnType<typeof meAlbumsRepository>;
