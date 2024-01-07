import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { Avatar, AvatarFallback, AvatarImage, Stack } from '@/component/ui';
import { type AlbumsInfoViewModel, albumsInfoInteractor } from '@/feature/albumsInfo/use-case';
import { authOptions } from '@/feature/auth/setting';
import styles from './AlbumInfo.module.scss';

type Props = AlbumsInfoViewModel;

export const AlbumInfoPresentation = (props: Props) => {
  const [img] = props.images;
  const [artist] = props.artists;
  const [artistImage] = artist.images ?? [];
  const { total_duration_ms: ms } = props;

  const hour = Math.floor(ms / 3600000);
  const min = Math.floor((ms % 3600000) / 60000);

  return (
    <Stack space="L" className={styles.wrapper} direction="row">
      <div className={styles.cover}>
        {img.url && (
          <Image
            src={img.url}
            alt={props.name ?? ''}
            width={img.width ?? 128}
            height={img.height ?? 128}
            aria-hidden="true"
            loading="lazy"
          />
        )}
      </div>
      <Stack space="S" className={styles.info}>
        <span>アルバム</span>
        <h1 className={styles.name}>{props.name}</h1>
        <Stack space="none" className={styles.artist} direction="row">
          <Avatar size="sm" rounded="full" className={styles.avatar}>
            {artistImage && <AvatarImage alt={artist.name} src={artistImage.url} loading="lazy" />}
            <AvatarFallback>{artist.name?.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span>{artist.name}</span>
          <span>{props.release_date}</span>
          <span>
            {props.total_tracks}曲, {`${hour}時間 ${min}分`}
          </span>
        </Stack>
      </Stack>
    </Stack>
  );
};

export const AlbumInfo = async ({ id }: { id: string }) => {
  const session = await getServerSession(authOptions);
  const { payload } = await albumsInfoInteractor.getAlbumsInfo({ id }, { token: session?.access_token ?? '' });
  return <AlbumInfoPresentation {...payload} />;
};
