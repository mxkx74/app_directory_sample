import { path } from '@/constant/path';
import { fetcher } from '@/lib/fetcher';
import { pathBuilder } from '@/util/path';
import { albumsModelSchema, type AlbumsModel, type AlbumsListModel, albumsListModelSchema } from './albumsModel';

const endpoint = path.albums;

export const albumsRepository = {
  async findByID(params: { id: string; token: string }, isThrowError = false) {
    const { token, ...parameter } = params;
    const url = pathBuilder(endpoint, parameter);
    return fetcher<AlbumsModel>(url, undefined, {
      validationSchema: albumsModelSchema,
      isThrowError,
      token,
    });
  },

  async findList(params: { ids: string[]; token: string }, isThrowError = false) {
    const { token, ...parameter } = params;
    const ids = parameter.ids.join(',');
    const url = pathBuilder(endpoint, { ids });
    return fetcher<AlbumsListModel>(url, undefined, {
      validationSchema: albumsListModelSchema,
      isThrowError,
      token,
    });
  },
};

export type AlbumsRepository = typeof albumsRepository;
