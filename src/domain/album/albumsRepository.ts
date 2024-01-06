import { path } from '@/constant/path';
import { fetcher } from '@/lib/fetcher';
import { type FetcherOptions } from '@/lib/fetcher/fetcher';
import { pathBuilder } from '@/util/path';
import { albumsModelSchema, type AlbumsModel, albumsListModelSchema, type AlbumsListModel } from './albumsModel';

const endpoint = path.albums;

export const albumsRepository = {
  async findByID(params: { id: string }, options?: FetcherOptions) {
    const url = pathBuilder(endpoint, params);
    return fetcher<AlbumsModel>(url, undefined, {
      ...options,
      validationSchema: albumsModelSchema,
    });
  },

  async findList(params: { ids: string[] }, options?: FetcherOptions) {
    const ids = params.ids.join(',');
    const url = pathBuilder(endpoint, { ids });
    return fetcher<AlbumsListModel>(url, undefined, {
      ...options,
      validationSchema: albumsListModelSchema,
    });
  },
};

export type AlbumsRepository = typeof albumsRepository;
