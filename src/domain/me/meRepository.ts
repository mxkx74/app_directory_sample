import { path } from '@/constant/path';
import { meModelSchema, type MeModel } from '@/domain/me/meModel';
import { fetcher } from '@/lib/fetcher';

const url = path.user.me;

export const meRepository = {
  async find({ token }: { token?: string }, isThrowError = false) {
    return fetcher<MeModel>(url, undefined, {
      validationSchema: meModelSchema,
      isThrowError,
      token,
    });
  },
};

export type MeRepository = typeof meRepository;
