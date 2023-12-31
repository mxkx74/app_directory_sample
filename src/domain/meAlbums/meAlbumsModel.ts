import { z } from 'zod';

export const meAlbumsModelSchema = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string().nullable(),
  offset: z.number(),
  previous: z.string().nullable(),
  total: z.number(),
  items: z
    .array(
      z.object({
        added_at: z.string().datetime().optional(),
        album: z
          .object({
            album_type: z.union([z.literal('album'), z.literal('single'), z.literal('compilation')]),
            total_tracks: z.number(),
            available_markets: z.array(z.string()),
            external_urls: z.object({
              spotify: z.string().optional(),
            }),
            href: z.string(),
            id: z.string(),
            images: z.array(
              z.object({
                url: z.string(),
                height: z.number().nullable(),
                width: z.number().nullable(),
              }),
            ),
            name: z.string(),
            release_date: z.string(),
            release_date_precision: z.union([z.literal('year'), z.literal('month'), z.literal('day')]),
            restrictions: z
              .object({
                reason: z.union([z.literal('market'), z.literal('product'), z.literal('explicit')]).optional(),
              })
              .optional(),
            type: z.literal('album'),
            uri: z.string(),
            artists: z.array(
              z
                .object({
                  external_urls: z.object({
                    spotify: z.string().optional(),
                  }),
                  href: z.string(),
                  id: z.string(),
                  name: z.string(),
                  type: z.literal('artist'),
                  uri: z.string(),
                })
                .partial(),
            ),
            tracks: z.object({
              href: z.string(),
              limit: z.number(),
              next: z.string().nullable(),
              offset: z.number(),
              previous: z.string().nullable(),
              total: z.number(),
              items: z.array(
                z.object({
                  artists: z
                    .array(
                      z.object({
                        external_urls: z
                          .object({
                            spotify: z.string().optional(),
                          })
                          .optional(),
                        href: z.string().optional(),
                        id: z.string().optional(),
                        name: z.string().optional(),
                        type: z.literal('artist').optional(),
                        uri: z.string().optional(),
                      }),
                    )
                    .optional(),
                  available_markets: z.array(z.string()).optional(),
                  disc_number: z.number().optional(),
                  duration_ms: z.number().optional(),
                  explicit: z.boolean().optional(),
                  external_urls: z
                    .object({
                      spotify: z.string().optional(),
                    })
                    .optional(),
                  href: z.string().optional(),
                  id: z.string().optional(),
                  is_playable: z.boolean().optional(),
                  linked_from: z
                    .object({
                      external_urls: z
                        .object({
                          spotify: z.string().optional(),
                        })
                        .optional(),
                      href: z.string().optional(),
                      id: z.string().optional(),
                      type: z.string().optional(),
                      uri: z.string().optional(),
                    })
                    .optional(),
                  restrictions: z
                    .object({
                      reason: z.string().optional(),
                    })
                    .optional(),
                  name: z.string().optional(),
                  preview_url: z.string().nullish(),
                  track_number: z.number().optional(),
                  type: z.string().optional(),
                  uri: z.string().optional(),
                  is_local: z.boolean().optional(),
                }),
              ),
            }),
            copyrights: z.array(
              z.object({
                text: z.string(),
                type: z.string(),
              }),
            ),
            external_ids: z.object({
              isrc: z.string().optional(),
              ean: z.string().optional(),
              upc: z.string().optional(),
            }),
            genres: z.array(z.string()),
            label: z.string(),
            popularity: z.number(),
          })
          .optional(),
      }),
    )
    .default([]),
});

export type MeAlbumsModel = z.infer<typeof meAlbumsModelSchema>;

export const meAlbumsContainModelSchema = z.array(z.boolean());

export type MeAlbumsContainModel = z.infer<typeof meAlbumsContainModelSchema>;
