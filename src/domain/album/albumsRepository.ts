import { path } from '@/constant/path';
import { fetcher } from '@/lib/fetcher';
import { pathBuilder } from '@/util/path';
import { albumsModelSchema, type AlbumsModel, type AlbumsListModel, albumsListModelSchema } from './albumsModel';

const endpoint = path.albums;

export const albumsRepository = {
  async findByID(params: { id: string }, isThrowError = false) {
    const url = pathBuilder(endpoint, params);
    return fetcher<AlbumsModel>(url, undefined, {
      validationSchema: albumsModelSchema,
      isThrowError,
    });
  },

  async findList(params: { ids: string[] }, isThrowError = false) {
    const ids = params.ids.join(',');
    const url = pathBuilder(endpoint, { ids });
    return fetcher<AlbumsListModel>(url, undefined, {
      validationSchema: albumsListModelSchema,
      isThrowError,
    });
  },
};

export type AlbumsRepository = typeof albumsRepository;
