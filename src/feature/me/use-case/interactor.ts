import { meRepository } from '@/domain/me/meRepository';
import { mePlaylistRepository } from '@/domain/mePlaylists/mePlaylistsRepository';
import { type HttpResponse } from '@/type/httpResponse';
import { type MeViewModel, meViewModelSchema, type MePlaylistViewModel, mePlaylistViewModelSchema } from './boundary';

const meRepo = meRepository();
const mePlaylistRepo = mePlaylistRepository();

export const meInteractor = () => {
  return {
    async findMe(): Promise<HttpResponse<MeViewModel>> {
      const { payload, error, status } = await meRepo.find();

      return {
        ...(payload != null && { data: meViewModelSchema.parse(payload) }),
        error,
        status,
      };
    },

    async findPlaylist(): Promise<HttpResponse<MePlaylistViewModel>> {
      const { payload, error, status } = await mePlaylistRepo.find();

      return {
        ...(payload != null && { data: mePlaylistViewModelSchema.parse(payload) }),
        error,
        status,
      };
    },
  };
};
