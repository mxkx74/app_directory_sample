import { path } from '@/constant/path';
import { meSchema } from '@/domain/me/meModel';
import { fetcher } from '@/lib/fetcher';
import { pathBuilder } from '@/util/path';
import { type MePlaylist } from './mePlaylistsModel';

export const mePlaylistRepository = () => {
  const endpoint = path.user.mePlaylists;

  return {
    async find(params?: { limit: number; offset: number }) {
      const url = pathBuilder(endpoint, params);
      const { payload, error } = await fetcher<MePlaylist>(url);

      return {
        payload: payload ?? meSchema.parse(payload),
        error,
      };
    },
  };
};
