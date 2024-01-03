import { type MeAlbumsRepository } from '@/domain/meAlbums/meAlbumsRepository';
import { type MePlaylistRepository } from '@/domain/mePlaylists/mePlaylistsRepository';
import { type HttpResponse } from '@/type/httpResponse';
import { type MeLibraryViewModel, translateMeLibraryViewModel } from './boundary';

export const meLibraryListInteractor = (
  meAlbumsRepository: MeAlbumsRepository,
  mePlaylistRepository: MePlaylistRepository,
) => {
  return {
    async findAllLibrary({
      isThrowError = false,
      limit = 20,
      token,
      offset,
      nextAlbum = 0,
      nextPlaylist = 0,
    }: {
      nextAlbum?: number;
      nextPlaylist?: number;
      isThrowError?: boolean;
      limit?: number;
      offset?: number;
      token?: string;
    }): Promise<HttpResponse<MeLibraryViewModel>> {
      const [album, playlist] = await Promise.all([
        nextAlbum > -1
          ? meAlbumsRepository.find({ token, limit, offset: offset ?? nextAlbum }, isThrowError)
          : Promise.resolve(),
        nextPlaylist > -1
          ? mePlaylistRepository.find({ token, limit, offset: offset ?? nextPlaylist }, isThrowError)
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
