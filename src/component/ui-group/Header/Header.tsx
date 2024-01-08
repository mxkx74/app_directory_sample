'use client';

import { HistoryButton } from '@/component/ui-group';
import styles from './Header.module.scss';

type Props = {
  children?: React.ReactNode;
};

export const Header = ({ children }: Props) => {
  return (
    <header className={styles.wrapper}>
      <HistoryButton />
      <nav>{children}</nav>
    </header>
  );
};
