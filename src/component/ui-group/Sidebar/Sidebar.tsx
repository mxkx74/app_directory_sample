import { Suspense } from 'react';
import { getServerSession } from 'next-auth';
import { ErrorBoundary } from 'react-error-boundary';
import { Stack } from '@/component/ui';
import { GlobalNav } from '@/component/ui-group';
import { authOptions } from '@/feature/auth/setting';
import { MeLibraryList } from '@/feature/meLibraryList/component/MeLibraryList';
import styles from './Sidebar.module.scss';

export const Sidebar = async () => {
  const session = await getServerSession(authOptions);
  const token = session?.access_token ?? '';

  return (
    <nav>
      <Stack space="S">
        <Stack space="M" className={styles.sidebarSub}>
          <GlobalNav />
        </Stack>

        <Stack className={styles.sidebarMain}>
          <ErrorBoundary fallback={<div>error</div>}>
            <Suspense fallback={<>loading</>}>
              <MeLibraryList token={token} />
            </Suspense>
          </ErrorBoundary>
        </Stack>
      </Stack>
    </nav>
  );
};
