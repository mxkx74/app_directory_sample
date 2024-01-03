import { path } from '@/constant/path';
import { fetcher } from '@/lib/fetcher';
import { pathBuilder } from '@/util/path';
import { artistsModelSchema, type ArtistsModel, type ArtistsListModel } from './artistsModel';

const endpoint = path.artists;

export const artistsRepository = {
  async findByID(params: { id: string; token: string }, isThrowError = false) {
    const { token, ...parameter } = params;
    const url = pathBuilder(endpoint, parameter);
    return fetcher<ArtistsModel>(url, undefined, {
      validationSchema: artistsModelSchema,
      isThrowError,
      token,
    });
  },

  async findList(params: { ids: string[]; token: string }, isThrowError = false) {
    const { token, ...parameter } = params;
    const ids = parameter.ids.join(',');
    const url = pathBuilder(endpoint, { ids });
    return fetcher<ArtistsListModel>(url, undefined, {
      validationSchema: artistsModelSchema,
      isThrowError,
      token,
    });
  },
};

export type ArtistsRepository = typeof artistsRepository;
