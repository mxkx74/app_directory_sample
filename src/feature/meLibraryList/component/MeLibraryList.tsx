import { type ComponentPropsWithRef } from 'react';

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
    <Stack direction="column" space="M" {...props}>
      {items.map((item) => {
        const [image] = item.images ?? [];
        const rounded = item.type === 'playlist' ? 'full' : 'md';
        const type = item.type === 'playlist' ? 'プレイリスト' : 'アルバム';
        const owner = item.type === 'playlist' ? `・${item.owner?.display_name}` : '';

        return (
          <Stack direction="row" space="M" key={item.id}>
            <Avatar size="md" rounded={rounded}>
              {image && <AvatarImage alt={item.name} src={image?.url} />}
              <AvatarFallback>{item.id}</AvatarFallback>
            </Avatar>
            <Stack direction="column" space="none">
              <Text className={styles.title}>{item.name}</Text>
              <Text size="S">{`${type} ${owner}`}</Text>
            </Stack>
          </Stack>
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
