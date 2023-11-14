import { type ReactNode } from 'react';
import style from '@/app/Layout.module.scss';

export default function Page2Layout({ children }: { children: ReactNode }) {
  return (
    <div className={style.wrapper}>
      <main className={style.main}>{children}</main>
    </div>
  );
}
