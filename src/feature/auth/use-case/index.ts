import { authRepository } from '@/domain/auth/authRepository';
import { authInteractor as interactor } from './interactor';

export const authInteractor = interactor(authRepository);
export { type AuthViewModel } from './boundary';
