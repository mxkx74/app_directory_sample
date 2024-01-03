import { path } from '@/constant/path';
import { fetcher } from '@/lib/fetcher';
import { pathBuilder } from '@/util/path';
import { type MePlaylistModel } from './mePlaylistsModel';

const endpoint = path.user.mePlaylists;

export const mePlaylistRepository = {
  async find(params: { limit?: number; offset?: number; token?: string }, isThrowError = false) {
    const { token, ...parameter } = params;
    const url = pathBuilder(endpoint, parameter);
    return fetcher<MePlaylistModel>(url, undefined, { isThrowError, token });
  },
};

export type MePlaylistRepository = typeof mePlaylistRepository;
