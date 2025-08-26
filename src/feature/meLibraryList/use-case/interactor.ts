import { meAlbumsRepository, type MeAlbumsRepository } from '@/domain/meAlbums/meAlbumsRepository';
import { mePlaylistRepository, type MePlaylistRepository } from '@/domain/mePlaylists/mePlaylistsRepository';
import { meLibraryListKeys } from '@/feature/meLibraryList/adapter';
import { type FetcherOptions } from '@/lib/fetcher/fetcher';
import { queryClient } from '@/provider/QueryClientProvider';
import { type HttpResponse } from '@/type/httpResponse';
import { isClient } from '@/util/client';
import { translateMeLibraryViewModel, type MeLibraryViewModel } from './';

export const interactor = (meAlbumsRepository: MeAlbumsRepository, mePlaylistRepository: MePlaylistRepository) => {
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
      const localData = (isClient() ? queryClient.getQueryData(meLibraryListKeys.all) : undefined) as {
        pageParams: unknown[];
        pages: HttpResponse<MeLibraryViewModel>[];
      };

      console.log('localData', localData);

      // if (localData && [...localData.pageParams].pop().hasNext) {
      //   return {
      //     payload: localData.pages[localData.pages.length - 1]?.payload ?? undefined,
      //     error: undefined,
      //     status: 200,
      //   };
      // }

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

export const meLibraryListInteractor = interactor(meAlbumsRepository, mePlaylistRepository);
