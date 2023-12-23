import { Fragment, type ComponentPropsWithRef } from 'react';

import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { Avatar, AvatarImage, Stack, Text, AvatarFallback } from '@/component/ui';
import { authOptions } from '@/feature/auth/setting';
import { meLibraryInteractor } from '@/feature/meLibraryList/use-case';
import { type MeLibraryViewModel } from '@/feature/meLibraryList/use-case';

import * as styles from './MeLibraryList.module.scss';

type PresentationProps = ComponentPropsWithRef<'div'> & MeLibraryViewModel;

// presentation component
export const MeLibraryListPresentation = ({ items, ...props }: PresentationProps) => {
  return (
    <Stack direction="column" space="none" {...props} className={styles.wrapper}>
      {items.map((item) => {
        const [image] = item.images ?? [];
        const rounded = item.type === 'playlist' ? 'full' : 'md';
        const type = item.type === 'playlist' ? 'プレイリスト' : 'アルバム';
        const owner = item.type === 'playlist' ? `・${item.owner}` : '';

        return (
          <Fragment key={item.id}>
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
    </Stack>
  );
};

// container component
export const MeLibraryList = async () => {
  const { access_token: token } = (await getServerSession(authOptions)) ?? {};
  if (!token) return null;

  const { payload, error } = await meLibraryInteractor.findAllLibrary(token);
  if (error) throw error;

  return payload && <MeLibraryListPresentation {...payload} />;
};
