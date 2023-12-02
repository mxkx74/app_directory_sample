import { authRepository } from '@/domain/auth/authRepository';

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
  };
};
