'use client';

import { useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider as QCP } from '@tanstack/react-query';

export const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  // info: https://zenn.dev/yumemi_inc/articles/react-initial-state-take-advantage#%E4%BD%99%E8%AB%87%3A-usememo-%E3%81%98%E3%82%83%E3%83%80%E3%83%A1%E3%81%AA%E3%82%93%E3%81%A7%E3%81%99
  const [queryClient] = useState(() => new QueryClient());

  return <QCP client={queryClient}>{children}</QCP>;
};
