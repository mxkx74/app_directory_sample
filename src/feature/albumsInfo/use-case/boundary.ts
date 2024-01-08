/* eslint-disable @typescript-eslint/naming-convention */
import { intervalToDuration } from 'date-fns';
import { type z } from 'zod';
import { type AlbumsModel, albumsModelSchema } from '@/domain/album/albumsModel';
import { type ArtistsListModel, artistsListModelSchema } from '@/domain/artists/artistsModel';

export const albumsInfoViewModelSchema = albumsModelSchema.transform((albumsModel) => {
  const { name, images, release_date, total_tracks, type, artists } = albumsModel;
  const totalDurationMs = albumsModel.tracks.items.reduce((acc, cur) => acc + (cur?.duration_ms ?? 0), 0);

  return {
    name,
    images,
    release_date,
    artists: [...artists.map(({ id }) => id ?? '')],
    total_tracks,
    total_duration: {
      ...intervalToDuration({ start: 0, end: totalDurationMs }),
    },
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

export type AlbumsInfoViewModel = Omit<z.output<typeof albumsInfoViewModelSchema>, 'artists'> &
  z.output<typeof albumsInfoArtistViewModelSchema>;

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
