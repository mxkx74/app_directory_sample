import { path } from '@/constant/path';
import { type Me } from '@/domain/me/meModel';
import { fetcher } from '@/lib/fetcher';

export const meRepository = () => {
  const url = path.user.me;

  return {
    async find() {
      const { payload, error } = await fetcher<Me>(url);

      return {
        payload,
        error,
      };
    },
  };
};
