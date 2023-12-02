import { z } from 'zod';

export const meSchema = z.object({
  country: z.string().optional(),
  display_name: z.string().optional(),
  email: z.string().email().optional(),
  explicit_content: z
    .object({
      filter_enabled: z.boolean(),
      filter_locked: z.boolean(),
    })
    .optional(),
  externalUrls: z
    .object({
      spotify: z.string().url().optional(),
    })
    .optional(),
  followers: z
    .object({
      href: z.string().url().nullish(),
      total: z.number().optional(),
    })
    .optional(),
  id: z.string().optional(),
  href: z.string().url().optional(),
  images: z
    .array(
      z.object({
        url: z.string().url(),
        height: z.number().nullable(),
        width: z.number().nullable(),
      }),
    )
    .optional(),
  product: z.union([z.literal('premium'), z.literal('free'), z.literal('open')]).optional(),
  type: z.literal('user').optional(),
  uri: z.string().url().optional(),
});

export type Me = z.infer<typeof meSchema>;
