import { path } from '@/constant/path';
import { fetcher } from '@/lib/fetcher';
import { type FetcherOptions } from '@/lib/fetcher/fetcher';
import { pathBuilder } from '@/util/path';
import {
  meAlbumsModelSchema,
  type MeAlbumsModel,
  meAlbumsContainModelSchema,
  type MeAlbumsContainModel,
} from './meAlbumsModel';

const endpoint = path.user.meAlbums;

export const meAlbumsRepository = {
  async find(params: { limit?: number; offset?: number }, options?: FetcherOptions) {
    const url = pathBuilder(endpoint, params);
    return fetcher<MeAlbumsModel>(url, undefined, {
      ...options,
      validationSchema: meAlbumsModelSchema,
    });
  },

  async save(params: { ids: string[] }, options?: FetcherOptions) {
    return fetcher<void>(
      endpoint,
      {
        method: 'PUT',
        body: JSON.stringify(params),
      },
      options,
    );
  },

  async delete(params: { ids: string[] }, options?: FetcherOptions) {
    return fetcher<void>(
      endpoint,
      {
        method: 'DELETE',
        body: JSON.stringify(params),
      },
      options,
    );
  },

  async contain(params: { ids: string[] }, options?: FetcherOptions) {
    const ids = params.ids.join(',');
    const url = pathBuilder(endpoint, { ids });
    return fetcher<MeAlbumsContainModel>(url, undefined, {
      ...options,
      validationSchema: meAlbumsContainModelSchema,
    });
  },
};

export type MeAlbumsRepository = typeof meAlbumsRepository;
