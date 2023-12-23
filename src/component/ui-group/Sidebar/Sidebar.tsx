import { Suspense } from 'react';
import { Stack } from '@/component/ui';
import { GlobalNav } from '@/component/ui-group';
import { MeLibraryList } from '@/feature/meLibraryList/component/MeLibraryList';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <nav>
      <Stack space="S">
        <Stack width="full" space="M" className={styles.sidebarSub}>
          <GlobalNav />
        </Stack>

        <Stack width="full" className={styles.sidebarMain}>
          <Suspense fallback={<>loading</>}>
            <MeLibraryList />
          </Suspense>
        </Stack>
      </Stack>
    </nav>
  );
};
