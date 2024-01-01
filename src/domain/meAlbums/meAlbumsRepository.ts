import { path } from '@/constant/path';
import { fetcher } from '@/lib/fetcher';
import { pathBuilder } from '@/util/path';
import {
  meAlbumsModelSchema,
  type MeAlbumsModel,
  meAlbumsContainModelSchema,
  type MeAlbumsContainModel,
} from './meAlbumsModel';

const endpoint = path.user.meAlbums;

export const meAlbumsRepository = {
  async find(params?: { limit: number; offset: number }, isThrowError = false) {
    const url = pathBuilder(endpoint, params);
    return fetcher<MeAlbumsModel>(url, undefined, {
      validationSchema: meAlbumsModelSchema,
      isThrowError,
    });
  },

  async save(params: { ids: string[] }, isThrowError = false) {
    return fetcher<void>(
      endpoint,
      {
        method: 'PUT',
        body: JSON.stringify(params),
      },
      {
        isThrowError,
      },
    );
  },

  async delete(params: { ids: string[] }, isThrowError = false) {
    return fetcher<void>(
      endpoint,
      {
        method: 'DELETE',
        body: JSON.stringify(params),
      },
      {
        isThrowError,
      },
    );
  },

  async contain(params: { ids: string[] }, isThrowError = false) {
    const ids = params.ids.join(',');
    const url = pathBuilder(endpoint, { ids });
    return fetcher<MeAlbumsContainModel>(url, undefined, {
      validationSchema: meAlbumsContainModelSchema,
      isThrowError,
    });
  },
};

export type MeAlbumsRepository = typeof meAlbumsRepository;
