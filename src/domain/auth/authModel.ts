import { z } from 'zod';
import { type toZod } from '@/type/schema';

export type AuthModel = {
  expires_in?: number;
  refresh_token?: string;
  access_token?: string;
  name?: string | null;
  email?: string | null;
  picture?: string | null;
  sub?: string;
};

export const authModelSchema: toZod<AuthModel> = z.object({
  expires_in: z.number().optional(),
  refresh_token: z.string().optional(),
  access_token: z.string().optional(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  picture: z.string().nullish(),
  sub: z.string().optional(),
});
