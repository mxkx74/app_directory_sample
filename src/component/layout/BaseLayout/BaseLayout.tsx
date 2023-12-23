import { type ReactNode } from 'react';
import { Stack } from '@/component/ui';
import { Sidebar } from '@/component/ui-group/';
import styles from './BaseLayout.module.scss';

type Props = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: Props) => {
  return (
    <Stack direction="row" padding="S" space="S">
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <main>{children}</main>
    </Stack>
  );
};
