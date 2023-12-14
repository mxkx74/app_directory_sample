import { type z } from 'zod';
import { authModelSchema } from '@/domain/auth/authModel';

export const authViewModelSchema = authModelSchema.transform((data) => ({
  ...data,
  ...(data.expires_in && { expires_in: Date.now() + data.expires_in * 1000 }),
}));

export type AuthViewModel = z.output<typeof authViewModelSchema>;
