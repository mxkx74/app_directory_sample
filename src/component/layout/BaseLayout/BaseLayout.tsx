import { type ReactNode } from 'react';
import { Stack } from '@/component/ui';
import { Header, Sidebar } from '@/component/ui-group/';
import styles from './BaseLayout.module.scss';

type Props = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: Props) => {
  return (
    <Stack direction="row" padding="S" space="S" className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <Stack space="S" className={styles.main}>
        <Header />
        <main className={styles.content}>{children}</main>
      </Stack>
    </Stack>
  );
};
