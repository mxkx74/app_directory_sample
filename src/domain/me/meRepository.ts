import { path } from '@/constant/path';
import { meModelSchema, type MeModel } from '@/domain/me/meModel';
import { fetcher } from '@/lib/fetcher';

export const meRepository = () => {
  const url = path.user.me;

  return {
    async find(token: string, isThrowError = false) {
      return fetcher<MeModel>(url, undefined, { validationSchema: meModelSchema, isThrowError, token });
    },
  };
};

export type MeRepository = ReturnType<typeof meRepository>;
