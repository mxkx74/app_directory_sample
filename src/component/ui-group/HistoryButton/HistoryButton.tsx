'use client';

import { useRouter } from 'next/navigation';
import ArrowLeft from '@/asset/icon/arrowLeft.svg';
import ArrowRight from '@/asset/icon/arrowRight.svg';
import { Button, Stack } from '@/component/ui';
import styles from './HistoryButton.module.scss';

export const HistoryButton = () => {
  // TODO: 状態管理ライブラリを使って、historyの状態を管理する
  const router = useRouter();
  return (
    <Stack direction="row" space="S" className={styles.wrapper} aria-hidden="true">
      <Button
        round="full"
        width="fit"
        onClick={() => {
          router.back();
        }}
      >
        <ArrowLeft className={styles.arrowIcon} />
      </Button>
      <Button
        round="full"
        width="fit"
        onClick={() => {
          router.forward();
        }}
      >
        <ArrowRight className={styles.arrowIcon} />
      </Button>
    </Stack>
  );
};
