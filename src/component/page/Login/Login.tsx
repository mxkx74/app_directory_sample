'use client';

import { Stack } from '@/component/ui';
import { LoginCard } from '@/feature/auth/component/Login';
import styles from './Login.module.scss';

export const LoginPage = () => {
  return (
    <Stack space="L" className={styles.wrapper}>
      <LoginCard />
    </Stack>
  );
};
