import { path } from '@/constant/path';
import { fetcher } from '@/lib/fetcher';
import { pathBuilder } from '@/util/path';
import { type MePlaylistModel } from './mePlaylistsModel';

export const mePlaylistRepository = () => {
  const endpoint = path.user.mePlaylists;

  return {
    async find(params?: { limit: number; offset: number }) {
      const url = pathBuilder(endpoint, params);
      return fetcher<MePlaylistModel>(url);
    },
  };
};
