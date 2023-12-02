export const baseEndpoint = 'https://api.spotify.com/v1';
export const authEndpoint = 'https://accounts.spotify.com/api/token';

export const path = {
  auth: {
    token: () => `${authEndpoint}` as const,
    login: () => `${authEndpoint}/api/auth/login` as const,
    callback: () => `${authEndpoint}/api/auth/callback/spotify` as const,
  },
  user: {
    me: () => `${baseEndpoint}/me` as const,
    users: (userName?: string) => `${baseEndpoint}/users/${userName}` as const,
    topArtists: () => `${baseEndpoint}/me/artists` as const,
  },
} as const;
