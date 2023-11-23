'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { Button, Stack } from '@/component/ui';
import styles from './Login.module.scss';

export const LoginPage = () => {
  const handleLogin = () => {
    void signIn('spotify', { callbackUrl: 'http://localhost:3000' });
  };

  return (
    <Stack space="L" className={styles.wrapper}>
      <Image src="/asset/Spotify_Logo.png" alt="spotify logo" width={224} height={67} />
      <Button size="lg" onClick={handleLogin}>
        LOGIN
      </Button>
    </Stack>
  );
};
