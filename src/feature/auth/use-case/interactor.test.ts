import { type AuthModel } from '@/domain/auth/authModel';
import { type AuthRepository } from '@/domain/auth/authRepository';
import { authInteractor } from './interactor';

describe('authInteractor', () => {
  let mockAuthRepository: AuthRepository;
  let interactor: ReturnType<typeof authInteractor>;
  beforeAll(() => {
    const mockDate = new Date(2021, 0, 1, 1, 1, 1);
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  beforeEach(() => {
    mockAuthRepository = {
      signIn: jest.fn(),
      signOut: jest.fn(),
      refreshAccessToken: jest.fn().mockResolvedValueOnce({
        payload: { payload: {} },
        error: 'mock-error',
        status: 'mock-status',
      }),
    };

    interactor = authInteractor(mockAuthRepository);
  });

  it('should call signIn method of authRepository when login is called', () => {
    interactor.login();

    expect(mockAuthRepository.signIn).toHaveBeenCalled();
  });

  it('should call signOut method of authRepository when logout is called', () => {
    interactor.logout();

    expect(mockAuthRepository.signOut).toHaveBeenCalled();
  });

  it('should call refreshAccessToken method of authRepository with the provided token when refreshToken is called', async () => {
    const token: AuthModel = {
      name: 'test-name',
      email: 'test-email',
      picture: 'test-picture',
      expires_in: Date.now() + 3600 * 1000,
      access_token: 'test-access-token',
      refresh_token: 'test-refresh-token',
    };

    await interactor.refreshToken(token);

    expect(mockAuthRepository.refreshAccessToken).toHaveBeenCalledWith(token.refresh_token);
  });

  it('refreshTokenが呼ばれたときにexpires_inが更新される', async () => {
    const token: AuthModel = {
      name: 'test-name',
      email: 'test-email',
      picture: 'test-picture',
      expires_in: undefined,
      access_token: 'test-access-token',
      refresh_token: 'test-refresh-token',
    };

    const result = await interactor.refreshToken(token);

    expect(result).toEqual({
      payload: { ...token, expires_in: 1609434061000 },
      error: 'mock-error',
      status: 'mock-status',
    });
  });
});
