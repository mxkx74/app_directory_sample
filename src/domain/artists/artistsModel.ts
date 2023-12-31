import { z } from 'zod';

const imageUrlSchema = z.object({
  height: z.number().nullable(),
  url: z.string(),
  width: z.number().nullable(),
});

const externalUrlsSchema = z.object({
  spotify: z.string().optional(),
});

const followersSchema = z
  .object({
    href: z.string().nullable(),
    total: z.number(),
  })
  .partial();

export const artistsModelSchema = z
  .object({
    external_urls: externalUrlsSchema,
    followers: followersSchema,
    genres: z.array(z.string()),
    href: z.string(),
    id: z.string(),
    images: z.array(imageUrlSchema),
    name: z.string(),
    popularity: z.number(),
    type: z.literal('artist'),
    uri: z.string(),
  })
  .partial();

export type ArtistsModel = z.infer<typeof artistsModelSchema>;

export const artistsListModelSchema = z.object({
  artists: z.array(artistsModelSchema),
});

export type ArtistsListModel = z.infer<typeof artistsListModelSchema>;
