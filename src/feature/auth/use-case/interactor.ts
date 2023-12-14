/* eslint-disable @typescript-eslint/naming-convention */
import { type AuthModel } from '@/domain/auth/authModel';
import { authRepository } from '@/domain/auth/authRepository';
import { authViewModelSchema } from './boundary';

const repository = authRepository();

export const authInteractor = () => {
  return {
    login() {
      // ログイン処理
      repository.signIn();
    },
    logout() {
      // ログアウト処理
      repository.signOut();
    },
    async refreshToken(token?: AuthModel) {
      // トークンをリフレッシュする
      const { payload, error, status } = await repository.refreshAccessToken(token?.refresh_token);
      const result = {
        ...token,
        ...payload,
      };

      return {
        ...(payload && { payload: authViewModelSchema.parse(result) }),
        error,
        status,
      };
    },
  };
};
