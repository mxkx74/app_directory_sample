import { type AuthModel } from '@/domain/auth/authModel';
import { type AuthRepository } from '@/domain/auth/authRepository';
import { authViewModelSchema } from './boundary';

export const authInteractor = (authRepository: AuthRepository) => {
  return {
    login() {
      // ログイン処理
      authRepository.signIn();
    },
    logout() {
      // ログアウト処理
      authRepository.signOut();
    },
    async refreshToken(token?: AuthModel) {
      // トークンをリフレッシュする
      const { payload, error, status } = await authRepository.refreshAccessToken(token?.refresh_token);
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
