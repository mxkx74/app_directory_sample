import { type z } from 'zod';
import { meModelSchema } from '@/domain/me/meModel';
import { mePlaylistModelSchema, type MePlaylistModel } from '@/domain/mePlaylists/mePlaylistsModel';

/**
 * @description
 * This is a view model for the me page.
 */
export const meViewModelSchema = meModelSchema.transform((data) => ({
  images: data.images ?? [],
  display_name: data.display_name ?? '',
}));

export type MeViewModel = z.output<typeof meViewModelSchema>;

/**
 * @description
 * This is a view model for the me playlist.
 */
export const mePlaylistViewModelSchema = mePlaylistModelSchema;

export type MePlaylistViewModel = MePlaylistModel;
