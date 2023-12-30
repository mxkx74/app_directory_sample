import { type z } from 'zod';
import { type MeAlbumsModel, meAlbumsModelSchema } from '@/domain/meAlbums/meAlbumsModel';
import { type MePlaylistModel, mePlaylistModelSchema } from '@/domain/mePlaylists/mePlaylistsModel';

const meAlbumsModelListSchema = meAlbumsModelSchema.transform((data) => {
  return {
    nextAlbum: Number(new URLSearchParams(data.next?.split('?')[1]).get('offset')) || -1,
    items: data.items.map((item) => {
      const { id, name, images } = item.album ?? {};
      return {
        type: 'album' as const,
        id,
        name,
        images,
      };
    }),
  };
});

const mePlaylistModelListSchema = mePlaylistModelSchema.transform((data) => {
  return {
    nextPlaylist: Number(new URLSearchParams(data.next?.split('?')[1]).get('offset')) || -1,
    items: data.items.map((item) => {
      const { id, name, images, owner } = item;
      return {
        type: 'playlist' as const,
        id,
        name,
        images,
        ...(owner && { owner: owner?.display_name }),
      };
    }),
  };
});

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
