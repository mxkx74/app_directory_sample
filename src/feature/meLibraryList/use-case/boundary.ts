/* eslint-disable @typescript-eslint/naming-convention */
import { type z } from 'zod';
import { type MeAlbumsModel, meAlbumsModelSchema } from '@/domain/meAlbums/meAlbumsModel';
import { type MePlaylistModel, mePlaylistModelSchema } from '@/domain/mePlaylists/mePlaylistsModel';

const meAlbumsModelListSchema = meAlbumsModelSchema.transform((data) => ({
  nextAlbum: data.next,
  previousAlbum: data.previous,
  items: data.items.map((item) => {
    const album = item.album;
    return {
      type: 'album',
      id: album?.id,
      name: album?.name,
      images: album?.images,
    };
  }),
}));

const mePlaylistModelListSchema = mePlaylistModelSchema.transform((data) => ({
  nextPlayList: data.next,
  previousPlayList: data.previous,
  items: data.items.map((item) => {
    return {
      type: 'playlist',
      id: item.id,
      name: item.name,
      images: item.images,
    };
  }),
}));

export type MeLibraryViewModel = z.output<typeof meAlbumsModelListSchema> & z.output<typeof mePlaylistModelListSchema>;

export const translateMeLibraryViewModel = (
  albumData?: MeAlbumsModel,
  playlistData?: MePlaylistModel,
): MeLibraryViewModel => {
  const album = meAlbumsModelListSchema.parse(albumData);
  const playlist = mePlaylistModelListSchema.parse(playlistData);

  return {
    ...album,
    ...playlist,
    items: [...album.items, ...playlist.items],
  };
};
