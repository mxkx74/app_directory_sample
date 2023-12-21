import { type z } from 'zod';
import { type MeAlbumsModel, meAlbumsModelSchema } from '@/domain/meAlbums/meAlbumsModel';
import { type MePlaylistModel, mePlaylistModelSchema } from '@/domain/mePlaylists/mePlaylistsModel';

const meAlbumsModelListSchema = meAlbumsModelSchema.transform((data) => ({
  nextAlbum: data.next,
  previousAlbum: data.previous,
  items: data.items.map((item) => {
    const album = item.album;
    return {
      type: 'album' as const,
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
      type: 'playlist' as const,
      id: item.id,
      name: item.name,
      images: item.images,
      owner: item.owner?.display_name,
    };
  }),
}));

type meAlbumsModel = z.output<typeof meAlbumsModelListSchema>;
type mePlaylistModel = z.output<typeof mePlaylistModelListSchema>;

export type MeLibraryViewModel = Omit<meAlbumsModel & mePlaylistModel, 'items'> & {
  items: (meAlbumsModel['items'][number] | mePlaylistModel['items'][number])[];
};

export const translateMeLibraryViewModel = (
  albumData?: MeAlbumsModel,
  playlistData?: MePlaylistModel,
): MeLibraryViewModel => {
  const album = meAlbumsModelListSchema.parse(albumData);
  const playlist = mePlaylistModelListSchema.parse(playlistData);

  const items = [...album.items, ...playlist.items].sort((a, b) => ((a?.name ?? '') > (b?.name ?? '') ? 1 : -1));

  return {
    ...album,
    ...playlist,
    items,
  };
};
