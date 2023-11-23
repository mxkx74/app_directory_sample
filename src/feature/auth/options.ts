import { type NextAuthOptions } from 'next-auth';
import { type JWT } from 'next-auth/jwt';
import SpotifyProvider from 'next-auth/providers/spotify';

async function refreshAccessToken(token: JWT) {
  try {
    const endpoint = 'https://accounts.spotify.com/api/token';
    const params = new URLSearchParams({
      client_id: process.env.SPOTIFY_CLIENT_ID as string,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET as string,
      grant_type: 'refresh_token',
      refresh_token: token.refresh_token ?? '',
    });

    const response = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      body: params,
      cache: 'no-store',
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      access_token: refreshedTokens.access_token,
      expires_in: Date.now() + refreshedTokens.expires_in * 1000,
      refresh_token: refreshedTokens.refresh_token ?? token.refresh_token, // Fall back to old refresh token
    };
  } catch (error) {
    console.log('error', error);

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}

const scope =
  'user-read-recently-played user-read-playback-state user-top-read user-modify-playback-state user-read-currently-playing user-follow-read playlist-read-private user-read-email user-read-private user-library-read playlist-read-collaborative';

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      authorization: {
        params: {
          scope,
          redirect_uri: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/callback/spotify`,
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account != null) {
        token.id = account.id;
        token.expires_in = Date.now() + (account.expires_at as number) * 1000;
        token.access_token = account.access_token;
        token.refresh_token = account.refresh_token;
      }

      if (token.expires_in == null || Date.now() < token.expires_in) {
        return token;
      }

      return await refreshAccessToken(token);
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          name: token.name,
          email: token.email,
          image: token.picture,
        },
      };
    },
  },
  pages: {
    signIn: '/login',
  },
};
