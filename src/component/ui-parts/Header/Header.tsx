import Link from 'next/link';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.wrapper}>
      <h1>Header</h1>
      <nav>
        <ul className={style.nav}>
          <li>
            <Link href="/page1">PAGE 1</Link>
          </li>
          <li>
            <Link href="/page2">PAGE 2</Link>
          </li>
          <li>
            <Link href="/page3">PAGE 3</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
