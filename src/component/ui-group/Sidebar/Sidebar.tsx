import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Stack } from '@/component/ui';
import { GlobalNav } from '@/component/ui-group';
import { MeLibrary } from '@/feature/meLibraryList/component/MeLibrary';
import styles from './Sidebar.module.scss';

export const Sidebar = async () => {
  return (
    <nav>
      <Stack space="S">
        <Stack space="M" className={styles.sidebarSub}>
          <GlobalNav />
        </Stack>

        <Stack className={styles.sidebarMain}>
          <ErrorBoundary fallback={<div>error</div>}>
            <Suspense fallback={<>loading</>}>
              <MeLibrary />
            </Suspense>
          </ErrorBoundary>
        </Stack>
      </Stack>
    </nav>
  );
};
