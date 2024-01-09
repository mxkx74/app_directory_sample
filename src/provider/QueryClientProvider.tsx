'use client';

import { type ReactNode } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createIDBPersister } from '@/lib/IDBPersister/IDBPersister';

export const queryClient = new QueryClient();

export const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  // info: https://zenn.dev/yumemi_inc/articles/react-initial-state-take-advantage#%E4%BD%99%E8%AB%87%3A-usememo-%E3%81%98%E3%82%83%E3%83%80%E3%83%A1%E3%81%AA%E3%82%93%E3%81%A7%E3%81%99
  // const [queryClient] = useState(() => new QueryClient());
  const persister = createIDBPersister('react-query');

  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      {children}
    </PersistQueryClientProvider>
  );
};
