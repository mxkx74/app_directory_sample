import { path } from '@/constant/path';
import { fetcher } from '@/lib/fetcher';
import { pathBuilder } from '@/util/path';
import { type MePlaylistModel } from './mePlaylistsModel';

export const mePlaylistRepository = () => {
  const endpoint = path.user.mePlaylists;

  return {
    async find(token: string, params?: { limit: number; offset: number }, isThrowError = false) {
      const url = pathBuilder(endpoint, params);
      return fetcher<MePlaylistModel>(url, undefined, { token, isThrowError });
    },
  };
};

export type MePlaylistRepository = ReturnType<typeof mePlaylistRepository>;
