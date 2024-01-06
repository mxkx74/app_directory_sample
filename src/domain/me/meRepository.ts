import { path } from '@/constant/path';
import { meModelSchema, type MeModel } from '@/domain/me/meModel';
import { fetcher } from '@/lib/fetcher';
import { type FetcherOptions } from '@/lib/fetcher/fetcher';

const url = path.user.me;

export const meRepository = {
  async find(options?: FetcherOptions) {
    return fetcher<MeModel>(url, undefined, {
      ...options,
      validationSchema: meModelSchema,
    });
  },
};

export type MeRepository = typeof meRepository;
