import { type NextAuthOptions, getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import { isClient } from './client';

export const getSessionData = async (authOptions: NextAuthOptions) => {
  return isClient() ? getSession() : getServerSession(authOptions);
};
