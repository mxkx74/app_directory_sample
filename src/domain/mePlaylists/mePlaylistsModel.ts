import { z } from 'zod';

const mePlaylistSchema = z.object({
  items: z.array(
    z.object({
      collaborative: z.boolean(),
      description: z.string().nullable(),
      external_urls: z.object({
        spotify: z.string(),
      }),
      id: z.string(),
      images: z.array(
        z.object({
          url: z.string(),
          height: z.number().nullable(),
          width: z.number().nullable(),
        }),
      ),
      name: z.string(),
      owner: z.object({
        display_name: z.string(),
        external_urls: z.object({
          spotify: z.string(),
        }),
        followers: z.object({
          href: z.string(),
          total: z.number(),
        }),
        href: z.string(),
        id: z.string(),
        type: z.string(),
        uri: z.string(),
      }),
      public: z.boolean(),
      snapshot_id: z.string(),
      tracks: z.object({
        href: z.string(),
        total: z.number(),
      }),
      type: z.string(),
      uri: z.string(),
    }),
  ),
  href: z.string(),
  limit: z.number(),
  next: z.string().nullable(),
  offset: z.number(),
  previous: z.string().nullable(),
  total: z.number(),
});

export type MePlaylist = z.infer<typeof mePlaylistSchema>;
