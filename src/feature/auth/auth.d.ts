/* eslint-disable @typescript-eslint/consistent-type-definitions */
// eslint-disable-next-line unused-imports/no-unused-imports, @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    access_token?: string;
    user: {
      name?: string | null;
      email?: string | null;
      picture?: string | null;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    expires_in?: number;
    refresh_token?: string;
    access_token?: string;
  }
}
