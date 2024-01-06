import { path } from '@/constant/path';
import { fetcher } from '@/lib/fetcher';
import { type FetcherOptions } from '@/lib/fetcher/fetcher';
import { pathBuilder } from '@/util/path';
import { type MePlaylistModel } from './mePlaylistsModel';

const endpoint = path.user.mePlaylists;

export const mePlaylistRepository = {
  async find(params?: { limit?: number; offset?: number }, options?: FetcherOptions) {
    const url = pathBuilder(endpoint, params);
    return fetcher<MePlaylistModel>(url, undefined, options);
  },
};

export type MePlaylistRepository = typeof mePlaylistRepository;
