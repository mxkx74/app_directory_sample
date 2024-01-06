import { path } from '@/constant/path';
import { fetcher } from '@/lib/fetcher';
import { type FetcherOptions } from '@/lib/fetcher/fetcher';
import { pathBuilder } from '@/util/path';
import { artistsModelSchema, type ArtistsModel, type ArtistsListModel } from './artistsModel';

const endpoint = path.artists;

export const artistsRepository = {
  async findByID(params: { id: string }, options?: FetcherOptions) {
    const url = pathBuilder(endpoint, params);
    return fetcher<ArtistsModel>(url, undefined, {
      ...options,
      validationSchema: artistsModelSchema,
    });
  },

  async findList(params: { ids: string[] }, options?: FetcherOptions) {
    const ids = params.ids.join(',');
    const url = pathBuilder(endpoint, { ids });
    return fetcher<ArtistsListModel>(url, undefined, {
      ...options,
      validationSchema: artistsModelSchema,
    });
  },
};

export type ArtistsRepository = typeof artistsRepository;
