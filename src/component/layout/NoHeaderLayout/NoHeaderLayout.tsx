import { type ReactNode } from 'react';
import { Footer, Header } from '@/component/ui-parts';
import styles from './NoHeaderLayout.module.css';

type Props = {
  children: ReactNode;
};

export const NoHeaderLayout = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
