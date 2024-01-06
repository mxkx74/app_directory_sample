import { type MeRepository } from '@/domain/me/meRepository';
import { type MePlaylistRepository } from '@/domain/mePlaylists/mePlaylistsRepository';
import { type FetcherOptions } from '@/lib/fetcher/fetcher';
import { type HttpResponse } from '@/type/httpResponse';
import { type MeViewModel, meViewModelSchema, type MePlaylistViewModel, mePlaylistViewModelSchema } from './boundary';

export const meInteractor = (meRepository: MeRepository, mePlaylistRepository: MePlaylistRepository) => {
  return {
    async findMe(options: FetcherOptions): Promise<HttpResponse<MeViewModel>> {
      const { payload, error, status } = await meRepository.find(options);

      return {
        ...(payload && { payload: meViewModelSchema.parse(payload) }),
        error,
        status,
      };
    },

    async findPlaylist(
      params?: { limit?: number; offset?: number },
      options?: FetcherOptions,
    ): Promise<HttpResponse<MePlaylistViewModel>> {
      const { payload, error, status } = await mePlaylistRepository.find(params, options);

      return {
        ...(payload && { payload: mePlaylistViewModelSchema.parse(payload) }),
        error,
        status,
      };
    },
  };
};
