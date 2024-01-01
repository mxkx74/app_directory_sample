import { z } from 'zod';

const externalUrlsSchema = z.object({
  spotify: z.string().optional(),
});

const imageSchema = z.object({
  url: z.string(),
  height: z.number().nullable(),
  width: z.number().nullable(),
});

const artistSchema = z
  .object({
    external_urls: externalUrlsSchema,
    href: z.string(),
    id: z.string(),
    name: z.string(),
    type: z.string(),
    uri: z.string(),
  })
  .partial();

const restrictionsSchema = z
  .object({
    reason: z.union([z.literal('market'), z.literal('product'), z.literal('explicit')]).optional(),
  })
  .optional();

const trackItemSchema = z
  .object({
    artists: z.array(artistSchema),
    available_markets: z.array(z.string()),
    disc_number: z.number(),
    duration_ms: z.number(),
    explicit: z.boolean(),
    external_urls: externalUrlsSchema,
    href: z.string(),
    id: z.string(),
    is_playable: z.boolean(),
    linked_from: artistSchema,
    restrictions: restrictionsSchema,
    name: z.string(),
    preview_url: z.string().nullable(),
    track_number: z.number(),
    type: z.string(),
    uri: z.string(),
    is_local: z.boolean(),
  })
  .partial();

const tracksSchema = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string().nullable(),
  offset: z.number(),
  previous: z.string().nullable(),
  total: z.number(),
  items: z.array(trackItemSchema),
});

const copyrightSchema = z
  .object({
    text: z.string(),
    type: z.string(),
  })
  .partial();

const externalIdsSchema = z
  .object({
    isrc: z.string(),
    ean: z.string(),
    upc: z.string(),
  })
  .partial();

export const albumsModelSchema = z.object({
  album_type: z.union([z.literal('album'), z.literal('single'), z.literal('compilation')]),
  total_tracks: z.number(),
  available_markets: z.array(z.string()),
  external_urls: externalUrlsSchema,
  href: z.string(),
  id: z.string(),
  images: z.array(imageSchema),
  name: z.string(),
  release_date: z.string(),
  release_date_precision: z.union([z.literal('year'), z.literal('month'), z.literal('day')]),
  restrictions: restrictionsSchema,
  type: z.string(),
  uri: z.string(),
  artists: z.array(artistSchema),
  tracks: tracksSchema,
  copyrights: z.array(copyrightSchema),
  external_ids: externalIdsSchema,
  genres: z.array(z.string()),
  label: z.string(),
  popularity: z.number(),
});

export type AlbumsModel = z.infer<typeof albumsModelSchema>;

export const albumsListModelSchema = z.object({
  albums: z.array(albumsModelSchema),
});

export type AlbumsListModel = z.infer<typeof albumsListModelSchema>;
