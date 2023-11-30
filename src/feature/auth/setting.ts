import { type Account, type NextAuthOptions } from 'next-auth';
import { type JWT } from 'next-auth/jwt';
import SpotifyProvider from 'next-auth/providers/spotify';
import { type AuthModel } from '@/domain/model/authModel';
import { type SessionModel } from '@/domain/model/sessionModel';
import { authRepository } from '@/domain/repository/authRepository';

export const refreshAccessToken = async ({
  token,
  account,
}: {
  token: AuthModel;
  account: Account | null;
}): Promise<AuthModel> => {
  if (account != null) {
    token.id = account.id;
    token.expires_in = Date.now() + (account.expires_at as number) * 1000;
    token.access_token = account.access_token;
    token.refresh_token = account.refresh_token;
  }
  if (token.expires_in == null || Date.now() < token.expires_in) {
    return token;
  }
  return (await authRepository().refreshAccessToken(token.refresh_token)) ?? token;
};

export const transformTokenToSession = async ({
  session,
  token,
}: {
  session: SessionModel;
  token: JWT;
}): Promise<SessionModel> => {
  return {
    ...session,
    user: {
      ...session.user,
      name: token.name,
      email: token.email,
      picture: token.picture,
    },
  };
};

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
      return refreshAccessToken({ token, account });
    },
    async session({ session, token }) {
      return transformTokenToSession({ session, token });
    },
  },
  pages: {
    signIn: '/login',
  },
};
