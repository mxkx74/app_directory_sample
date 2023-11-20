import Link from 'next/link';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <h1>
        <Link href="/">Header</Link>
      </h1>
      <nav>
        <ul className={styles.nav}>
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
