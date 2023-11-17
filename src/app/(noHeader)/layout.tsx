import { type ReactNode } from 'react';
import { NoHeaderLayout } from '@/component/layout';

export default function Page2Layout({ children }: { children: ReactNode }) {
  return <NoHeaderLayout>{children}</NoHeaderLayout>;
}
