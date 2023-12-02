import { type KeyPath } from '@/type/keyPath';
export const baseEndpoint = 'https://api.spotify.com/v1';
export const authEndpoint = 'https://accounts.spotify.com/api/token';

export const path = {
  auth: {
    token: `${authEndpoint}`,
    login: `${authEndpoint}/api/auth/login`,
    callback: `${authEndpoint}/api/auth/callback/spotify`,
  },
  user: {
    me: `${baseEndpoint}/me`,
    users: `${baseEndpoint}/users`,
    mePlaylists: `${baseEndpoint}/me/playlists`,
  },
} as const;

export type keyPath = KeyPath<typeof path>;
