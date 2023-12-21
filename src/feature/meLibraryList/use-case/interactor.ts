import { type MeAlbumsRepository } from '@/domain/meAlbums/meAlbumsRepository';
import { type MePlaylistRepository } from '@/domain/mePlaylists/mePlaylistsRepository';
import { type HttpResponse } from '@/type/httpResponse';
import { type MeLibraryViewModel, translateMeLibraryViewModel } from './boundary';

export const meLibraryListInteractor = (
  meAlbumsRepository: MeAlbumsRepository,
  mePlaylistRepository: MePlaylistRepository,
) => {
  return {
    async findAllLibrary(token: string, limit = 20, offset = 0): Promise<HttpResponse<MeLibraryViewModel>> {
      const [album, playlist] = await Promise.all([
        meAlbumsRepository.find(token, { limit, offset }),
        mePlaylistRepository.find(token, { limit, offset }),
      ]);

      return {
        payload: translateMeLibraryViewModel(album.payload, playlist.payload),
        error: album.error ?? playlist.error,
        status: album.status ?? playlist.status,
      };
    },
  };
};
