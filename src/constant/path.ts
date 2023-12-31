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
    mePlaylists: `${baseEndpoint}/me/playlists`,
    meAlbums: `${baseEndpoint}/me/albums`,
    users: `${baseEndpoint}/users`,
  },
  albums: `${baseEndpoint}/albums`,
} as const;

export type keyPath = KeyPath<typeof path>;
