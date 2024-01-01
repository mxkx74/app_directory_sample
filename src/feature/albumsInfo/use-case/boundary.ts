/* eslint-disable @typescript-eslint/naming-convention */
import { type z } from 'zod';
import { type AlbumsModel, albumsModelSchema } from '@/domain/album/albumsModel';
import { type ArtistsListModel, artistsListModelSchema } from '@/domain/artists/artistsModel';

export const albumsInfoViewModelSchema = albumsModelSchema.transform((albumsModel) => {
  const { name, images, release_date, total_tracks, type, artists } = albumsModel;

  return {
    name,
    images,
    release_date,
    artists: [...artists.map(({ id }) => id ?? '')],
    total_tracks,
    type,
  };
});

export const albumsInfoArtistViewModelSchema = artistsListModelSchema.transform((artistModel) => {
  const artists = artistModel.artists;

  return {
    artists: artists.map((artist) => ({
      id: artist.id,
      name: artist.name,
      images: artist.images,
    })),
  };
});

type AlbumsInfoModel = z.output<typeof albumsInfoViewModelSchema>;
type AlbumsInfoArtistModel = z.output<typeof albumsInfoArtistViewModelSchema>;

export type AlbumsInfoViewModel = Omit<AlbumsInfoModel, 'artists'> & AlbumsInfoArtistModel;

export const translateAlbumInfoViewModel = (
  albumData?: AlbumsModel,
  artistData?: ArtistsListModel,
): AlbumsInfoViewModel => {
  const album = albumsInfoViewModelSchema.parse(albumData);
  const artist = albumsInfoArtistViewModelSchema.parse(artistData);

  return {
    ...album,
    ...artist,
  };
};
