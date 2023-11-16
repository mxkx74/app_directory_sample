import { type ReactNode } from 'react';
import { Footer, Header } from '@/component/ui-parts';
import style from '@/app/Layout.module.scss';

type Props = {
  children: ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <div className={style.wrapper}>
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
}
