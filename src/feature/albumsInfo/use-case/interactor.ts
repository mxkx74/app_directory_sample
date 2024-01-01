import { type AlbumsRepository } from '@/domain/album/albumsRepository';
import { type ArtistsRepository } from '@/domain/artists/artistRepository';
import { translateAlbumInfoViewModel } from './boundary';

export const albumsInfoInteractor = (albumsRepository: AlbumsRepository, artistsRepository: ArtistsRepository) => ({
  // use-case: ユーザーはアルバムの情報を取得する
  async getAlbumsInfo({ id, token, isThrowError = false }: { id: string; token: string; isThrowError: boolean }) {
    const albums = await albumsRepository.findByID(token, { id }, isThrowError);
    const artists = await artistsRepository.findList(
      token,
      { ids: albums.payload?.artists.filter(Boolean).map((album) => album.id ?? '') ?? [] },
      isThrowError,
    );

    return {
      payload: translateAlbumInfoViewModel(albums.payload, artists.payload),
      error: albums.error ?? artists.error,
      status: albums.status ?? artists.status,
    };
  },
});
