import { type z } from 'zod';
import { authModelSchema } from '@/domain/auth/authModel';

export const authViewModelSchema = authModelSchema.transform((data) => ({
  ...data,
  expires_in: (data.expires_in ?? 3600) * 1000,
}));

export type AuthViewModel = z.output<typeof authViewModelSchema>;
