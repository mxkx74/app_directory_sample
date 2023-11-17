import { type ReactNode } from 'react';
import { BaseLayout } from '@/component/layout';

type Props = {
  children: ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return <BaseLayout>{children}</BaseLayout>;
}
