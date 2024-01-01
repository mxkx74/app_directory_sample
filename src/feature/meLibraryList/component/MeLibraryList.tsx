'use client';

import { Fragment, type ComponentPropsWithRef } from 'react';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroller';
import { Avatar, AvatarImage, Stack, Text, AvatarFallback } from '@/component/ui';
import { useMeLibraryList } from '@/feature/meLibraryList/adapter';
import { type MeLibraryViewModel } from '@/feature/meLibraryList/use-case';
import * as styles from './MeLibraryList.module.scss';

type PresentationProps = ComponentPropsWithRef<'div'> & {
  loadMore: () => Promise<void>;
  hasMore: boolean;
  items: MeLibraryViewModel['items'];
};

// type別のデータ取得関数
const getItemProps = (item: MeLibraryViewModel['items'][number]) => {
  if (item.kind === 'playlist') {
    return {
      rounded: 'full',
      type: 'プレイリスト',
      owner: `・${item.owner}`,
    } as const;
  }
  return {
    rounded: 'md',
    type: 'アルバム',
    owner: '',
  } as const;
};

// presentation component
export const MeLibraryListPresentation = ({ loadMore, hasMore, items, ...props }: PresentationProps) => {
  return (
    <Stack direction="column" space="none" className={styles.wrapper} {...props}>
      <InfiniteScroll
        pageStart={0}
        loadMore={() => {
          void loadMore();
        }}
        initialLoad={false}
        hasMore={hasMore}
        useWindow={false}
        className={styles.infiniteScroll}
      >
        {items.map((item, index) => {
          const [image] = item.images ?? [];
          const { rounded, type, owner } = getItemProps(item);

          return (
            <Fragment key={index}>
              <Link href="/" className={styles.link}>
                <Stack width="full" direction="row" space="M" padding="S">
                  <Avatar size="md" rounded={rounded}>
                    {image && <AvatarImage alt={item.name} src={image?.url} />}
                    <AvatarFallback>{item.name?.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <Stack direction="column" space="none" width="full" className={styles.description}>
                    <Text overflow="ellipsis" className={styles.title}>
                      {item.name}
                    </Text>
                    <Text overflow="ellipsis" size="S">{`${type} ${owner}`}</Text>
                  </Stack>
                </Stack>
              </Link>
            </Fragment>
          );
        })}
      </InfiniteScroll>
    </Stack>
  );
};

// container component
export const MeLibraryList = () => {
  const { data: result, fetchNextPage, hasNextPage } = useMeLibraryList();

  return (
    <MeLibraryListPresentation
      loadMore={async () => {
        void fetchNextPage();
      }}
      hasMore={hasNextPage}
      items={result?.pages ?? []}
    />
  );
};
