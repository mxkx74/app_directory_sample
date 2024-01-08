import { type MeAlbumsRepository } from '@/domain/meAlbums/meAlbumsRepository';
import { type MePlaylistRepository } from '@/domain/mePlaylists/mePlaylistsRepository';
import { type FetcherOptions } from '@/lib/fetcher/fetcher';
import { type HttpResponse } from '@/type/httpResponse';
import { type MeLibraryViewModel, translateMeLibraryViewModel } from './boundary';

export const meLibraryListInteractor = (
  meAlbumsRepository: MeAlbumsRepository,
  mePlaylistRepository: MePlaylistRepository,
) => {
  return {
    async findAllLibrary(
      params?: {
        nextAlbum?: number;
        nextPlaylist?: number;
        limit?: number;
        offset?: number;
      },
      options?: FetcherOptions,
    ): Promise<HttpResponse<MeLibraryViewModel>> {
      const { nextAlbum = 0, nextPlaylist = 0, limit = 20, offset } = params ?? {};
      const [album, playlist] = await Promise.all([
        nextAlbum > -1 ? meAlbumsRepository.find({ limit, offset: offset ?? nextAlbum }, options) : Promise.resolve(),
        nextPlaylist > -1
          ? mePlaylistRepository.find({ limit, offset: offset ?? nextPlaylist }, options)
          : Promise.resolve(),
      ]);

      return {
        payload: translateMeLibraryViewModel(album?.payload, playlist?.payload),
        error: album?.error ?? playlist?.error,
        status: album?.status ?? playlist?.status ?? -1,
      };
    },
  };
};
