import { type ReactNode } from 'react';
import { Footer, Header } from '@/component/ui-group';
import styles from './NoHeaderLayout.module.scss';

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
