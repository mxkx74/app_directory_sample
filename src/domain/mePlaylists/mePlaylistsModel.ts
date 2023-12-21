import { z } from 'zod';

export const mePlaylistModelSchema = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string().nullable(),
  offset: z.number(),
  previous: z.string().nullable(),
  total: z.number(),
  items: z
    .array(
      z.object({
        collaborative: z.boolean().optional(),
        description: z.string().nullish(),
        external_urls: z
          .object({
            spotify: z.string().optional(),
          })
          .optional(),
        id: z.string().optional(),
        images: z
          .array(
            z.object({
              url: z.string(),
              height: z.number().nullable(),
              width: z.number().nullable(),
            }),
          )
          .optional(),
        name: z.string().optional(),
        owner: z
          .object({
            display_name: z.string().nullish(),
            external_urls: z
              .object({
                spotify: z.string(),
              })
              .optional(),
            followers: z
              .object({
                href: z.string().nullish(),
                total: z.number().optional(),
              })
              .optional(),
            href: z.string().optional(),
            id: z.string().optional(),
            type: z.literal('user').optional(),
            uri: z.string().optional(),
          })
          .optional(),
        public: z.boolean().optional(),
        snapshot_id: z.string().optional(),
        tracks: z
          .object({
            href: z.string().optional(),
            total: z.number().optional(),
          })
          .optional(),
        type: z.literal('playlist').optional(),
        uri: z.string().optional(),
      }),
    )
    .default([]),
});

export type MePlaylistModel = z.infer<typeof mePlaylistModelSchema>;
