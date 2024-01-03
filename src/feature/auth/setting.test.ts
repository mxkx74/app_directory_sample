import { type Account } from 'next-auth';
import { type AuthModel } from '@/domain/auth/authModel';
import { authRepository } from '@/domain/auth/authRepository';
import { type SessionModel } from '@/domain/auth/sessionModel';
import { refreshAccessToken, transformTokenToSession } from '@/feature/auth/setting';

jest.mock('@/domain/auth/authRepository', () => ({
  authRepository: {
    refreshAccessToken: jest.fn().mockResolvedValue({ payload: {} }),
  },
}));

jest.useFakeTimers();
const mockDateNow = new Date(2022, 1, 1).getTime(); // 2022年2月1日のUNIXタイムスタンプ
jest.setSystemTime(mockDateNow);

describe('refreshAccessToken', () => {
  const token: AuthModel = {
    name: 'test-name',
    email: 'test-email',
    picture: 'test-picture',
    expires_in: 3600 * 1000,
    access_token: 'test-access-token',
    refresh_token: 'test-refresh-token',
  };

  it('アカウントが存在する場合、アカウントの値がtokenに使われること', async () => {
    const account: Account = {
      expires_at: 3600 * 1000,
      access_token: 'account-access-token',
      refresh_token: 'account-refresh-token',
      providerAccountId: '',
      provider: '',
      type: 'email',
    };

    const result = await refreshAccessToken({ token, account });

    expect(result.access_token).toBe(account.access_token);
    expect(result.refresh_token).toBe(account.refresh_token);
  });

  it('トークンの有効期限が現在時刻よりも後の場合、authRepository.refreshAccessTokenがコールされないこと', async () => {
    const validToken = {
      ...token,
      expires_in: Date.now() + 3600 * 1000,
      access_token: 'test-access-token',
      refresh_token: 'test-refresh-token',
    };
    const result = await refreshAccessToken({ token: validToken, account: null });

    expect(authRepository.refreshAccessToken).not.toHaveBeenCalled();
    expect(result).toEqual(validToken);
  });

  it('トークンの有効期限が現在時刻よりも前の場合、authRepository.refreshAccessTokenがコールされること', async () => {
    const invalidToken = {
      ...token,
      expires_in: Date.now() - 3600 * 1000,
      access_token: 'test-access-token',
      refresh_token: 'test-refresh-token',
    };

    await refreshAccessToken({ token: invalidToken, account: null });

    expect(authRepository.refreshAccessToken).toHaveBeenCalled();
  });
});

describe('transformTokenToSession', () => {
  it('トークンをセッションに変換すること', async () => {
    const session: SessionModel = {
      user: {
        name: 'Old Name',
        email: 'old@example.com',
        picture: 'old-picture.jpg',
      },
      expires: '',
    };
    const token = {
      name: 'New Name',
      email: 'new@example.com',
      picture: 'new-picture.jpg',
    };

    expect(await transformTokenToSession({ session, token })).toEqual({
      user: {
        name: 'New Name',
        email: 'new@example.com',
        picture: 'new-picture.jpg',
      },
      expires: '',
    });
  });
});
