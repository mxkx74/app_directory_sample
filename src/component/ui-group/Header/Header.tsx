import { Suspense } from 'react';
import { MeNavigation } from '@/feature/me/component/MeNavigation';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className="tool" aria-hidden="true"></div>
      <nav>
        <Suspense fallback={<>loading</>}>
          <MeNavigation />
        </Suspense>
      </nav>
    </header>
  );
};
