import { Suspense } from 'react';
import Link from 'next/link';
import { MeNavigation } from '@/feature/me/component/MeNavigation';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <h1>
        <Link href="/">Header</Link>
      </h1>
      <nav>
        <Suspense fallback={<>loading</>}>
          <MeNavigation />
        </Suspense>
      </nav>
    </header>
  );
};
