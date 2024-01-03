import { type MeRepository } from '@/domain/me/meRepository';
import { type MePlaylistRepository } from '@/domain/mePlaylists/mePlaylistsRepository';
import { type HttpResponse } from '@/type/httpResponse';
import { type MeViewModel, meViewModelSchema, type MePlaylistViewModel, mePlaylistViewModelSchema } from './boundary';

export const meInteractor = (meRepository: MeRepository, mePlaylistRepository: MePlaylistRepository) => {
  return {
    async findMe(token?: string): Promise<HttpResponse<MeViewModel>> {
      const { payload, error, status } = await meRepository.find({ token });

      return {
        ...(payload && { payload: meViewModelSchema.parse(payload) }),
        error,
        status,
      };
    },

    async findPlaylist(token?: string): Promise<HttpResponse<MePlaylistViewModel>> {
      const { payload, error, status } = await mePlaylistRepository.find({ token });

      return {
        ...(payload && { payload: mePlaylistViewModelSchema.parse(payload) }),
        error,
        status,
      };
    },
  };
};
