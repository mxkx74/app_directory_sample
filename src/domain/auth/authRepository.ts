import { signIn, signOut } from 'next-auth/react';
import { path } from '@/constant/path';
import { type AuthModel } from '@/domain/auth/authModel';
import { fetcher } from '@/lib/fetcher';

export const authRepository = () => {
  const endpoint = path.auth.token();

  return {
    // ユーザーがログインした後、callbackUrlにリダイレクトされます。
    signIn(callbackUrl = '/') {
      void signIn('spotify', { callbackUrl });
    },

    // ユーザーログアウトします。
    signOut() {
      void signOut();
    },

    // アクセストークンを更新し、更新されたトークンを返します。
    async refreshAccessToken(refreshToken?: string) {
      const body = new URLSearchParams({
        client_id: process.env.SPOTIFY_CLIENT_ID as string,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET as string,
        grant_type: 'refresh_token',
        refresh_token: refreshToken ?? '',
      });

      const { payload, error } = await fetcher<AuthModel>(endpoint, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        method: 'POST',
        cache: 'no-store',
        body,
      });

      return { payload, error };
    },
  };
};
