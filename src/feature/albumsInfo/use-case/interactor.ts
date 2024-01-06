import { type AlbumsRepository } from '@/domain/album/albumsRepository';
import { type ArtistsRepository } from '@/domain/artists/artistRepository';
import { type FetcherOptions } from '@/lib/fetcher/fetcher';
import { translateAlbumInfoViewModel } from './boundary';

export const albumsInfoInteractor = (albumsRepository: AlbumsRepository, artistsRepository: ArtistsRepository) => ({
  // use-case: ユーザーはアルバムの情報を取得する
  async getAlbumsInfo({ id }: { id: string }, options?: FetcherOptions) {
    const albums = await albumsRepository.findByID({ id }, options);
    const artists = await artistsRepository.findList(
      { ids: albums.payload?.artists.filter(Boolean).map((album) => album.id ?? '') ?? [] },
      options,
    );

    return {
      payload: translateAlbumInfoViewModel(albums.payload, artists.payload),
      error: albums.error ?? artists.error,
      status: albums.status ?? artists.status,
    };
  },
});
