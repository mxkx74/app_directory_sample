import { path } from '@/constant/path';
import { fetcher } from '@/lib/fetcher';
import { pathBuilder } from '@/util/path';
import {
  meAlbumsModelSchema,
  type MeAlbumsModel,
  meAlbumsContainModelSchema,
  type MeAlbumsContainModel,
} from './meAlbumsModel';

const endpoint = path.user.meAlbums;

export const meAlbumsRepository = {
  async find(params: { token: string; limit?: number; offset?: number }, isThrowError = false) {
    const { token, ...parameter } = params;
    const url = pathBuilder(endpoint, parameter);
    return fetcher<MeAlbumsModel>(url, undefined, {
      validationSchema: meAlbumsModelSchema,
      isThrowError,
      token,
    });
  },

  async save(params: { ids: string[]; token: string }, isThrowError = false) {
    const { token, ...parameter } = params;
    return fetcher<void>(
      endpoint,
      {
        method: 'PUT',
        body: JSON.stringify(parameter),
      },
      {
        isThrowError,
        token,
      },
    );
  },

  async delete(params: { ids: string[]; token: string }, isThrowError = false) {
    const { token, ...parameter } = params;
    return fetcher<void>(
      endpoint,
      {
        method: 'DELETE',
        body: JSON.stringify(parameter),
      },
      {
        isThrowError,
        token,
      },
    );
  },

  async contain(params: { ids: string[]; token: string }, isThrowError = false) {
    const { token, ...parameter } = params;
    const ids = parameter.ids.join(',');
    const url = pathBuilder(endpoint, { ids });
    return fetcher<MeAlbumsContainModel>(url, undefined, {
      validationSchema: meAlbumsContainModelSchema,
      isThrowError,
      token,
    });
  },
};

export type MeAlbumsRepository = typeof meAlbumsRepository;
