import { path } from '@/constant/path';
import { fetcher } from '@/lib/fetcher';
import { pathBuilder } from '@/util/path';
import { type MePlaylistModel } from './mePlaylistsModel';

const endpoint = path.user.mePlaylists;

export const mePlaylistRepository = {
  async find(params?: { limit: number; offset: number }, isThrowError = false) {
    const url = pathBuilder(endpoint, params);
    return fetcher<MePlaylistModel>(url, undefined, { isThrowError });
  },
};

export type MePlaylistRepository = typeof mePlaylistRepository;
