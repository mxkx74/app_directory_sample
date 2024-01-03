import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import { authOptions } from '@/feature/auth/setting';
import { isClient } from './client';

export const getSessionData = async () => {
  const getData = isClient() ? getSession : getServerSession;
  return getData(authOptions);
};
