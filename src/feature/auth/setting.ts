import { type Account, type NextAuthOptions } from 'next-auth';
import { type JWT } from 'next-auth/jwt';
import SpotifyProvider from 'next-auth/providers/spotify';
import { type AuthModel } from '@/domain/auth/authModel';
import { authRepository } from '@/domain/auth/authRepository';
import { type SessionModel } from '@/domain/auth/sessionModel';

export const refreshAccessToken = async ({
  token,
  account,
}: {
  token: AuthModel;
  account: Account | null;
}): Promise<AuthModel> => {
  if (account != null) {
    return {
      ...token,
      expires_in: Date.now() + (account.expires_at as number) * 1000,
      access_token: account.access_token,
      refresh_token: account.refresh_token,
    };
  }

  if (Date.now() < (token.expires_in ?? 0)) {
    return token;
  }

  const { payload, error } = await authRepository().refreshAccessToken(token.refresh_token);

  return payload ?? { ...token, error: error?.message };
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
    access_token: token.access_token,
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
