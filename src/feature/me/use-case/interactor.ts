import { meRepository } from '@/domain/me/meRepository';
import { mePlaylistRepository } from '@/domain/mePlaylists/mePlaylistsRepository';
import { type HttpResponse } from '@/type/httpResponse';
import { type MeViewModel, meViewModelSchema, type MePlaylistViewModel, mePlaylistViewModelSchema } from './boundary';

export const meInteractor = (token: string) => {
  const meRepo = meRepository(token);
  const mePlaylistRepo = mePlaylistRepository();

  return {
    async findMe(): Promise<HttpResponse<MeViewModel>> {
      const { payload, error, status } = await meRepo.find();

      return {
        ...(payload && { payload: meViewModelSchema.parse(payload) }),
        error,
        status,
      };
    },

    async findPlaylist(): Promise<HttpResponse<MePlaylistViewModel>> {
      const { payload, error, status } = await mePlaylistRepo.find();

      return {
        ...(payload && { payload: mePlaylistViewModelSchema.parse(payload) }),
        error,
        status,
      };
    },
  };
};
