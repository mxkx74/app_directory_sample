export const authEndpoint = 'https://accounts.spotify.com/api/token';

export const path = {
  auth: {
    token: () => `${authEndpoint}` as const,
    login: () => `${authEndpoint}/api/auth/login` as const,
    callback: () => `${authEndpoint}/api/auth/callback/spotify` as const,
  },
} as const;
