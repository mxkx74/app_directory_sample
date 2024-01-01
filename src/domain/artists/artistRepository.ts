import { path } from '@/constant/path';
import { fetcher } from '@/lib/fetcher';
import { pathBuilder } from '@/util/path';
import { artistsModelSchema, type ArtistsModel, type ArtistsListModel } from './artistsModel';

const endpoint = path.artists;

export const artistsRepository = {
  async findByID(params: { id: string }, isThrowError = false) {
    const url = pathBuilder(endpoint, params);
    return fetcher<ArtistsModel>(url, undefined, {
      validationSchema: artistsModelSchema,
      isThrowError,
    });
  },

  async findList(params: { ids: string[] }, isThrowError = false) {
    const ids = params.ids.join(',');
    const url = pathBuilder(endpoint, { ids });
    return fetcher<ArtistsListModel>(url, undefined, {
      validationSchema: artistsModelSchema,
      isThrowError,
    });
  },
};

export type ArtistsRepository = typeof artistsRepository;
