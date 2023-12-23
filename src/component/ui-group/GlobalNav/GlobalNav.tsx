import clsx from 'clsx';
import Link from 'next/link';
import HomeIcon from '@/asset/icon/home.svg';
import SearchIcon from '@/asset/icon/search.svg';
import styles from './GlobalNav.module.scss';

type Props = {
  isActive?: boolean;
};

export const GlobalNav = ({ isActive }: Props) => {
  return (
    <ul className={clsx(styles.list)}>
      <li>
        <Link href="/">
          <HomeIcon className={clsx(styles.icon, isActive && styles.isActive)} />
          <span>ホーム</span>
        </Link>
      </li>
      <li>
        <Link href="/">
          <SearchIcon className={clsx(styles.icon, isActive && styles.isActive)} />
          <span>検索</span>
        </Link>
      </li>
    </ul>
  );
};
