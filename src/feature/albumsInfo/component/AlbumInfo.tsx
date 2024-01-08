/* eslint-disable @typescript-eslint/naming-convention */
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { Avatar, AvatarFallback, AvatarImage, Stack } from '@/component/ui';
import { type AlbumsInfoViewModel, albumsInfoInteractor } from '@/feature/albumsInfo/use-case';
import { authOptions } from '@/feature/auth/setting';
import styles from './AlbumInfo.module.scss';

type Props = AlbumsInfoViewModel;

export const AlbumInfoPresentation = ({ images, artists, total_duration, name, release_date, total_tracks }: Props) => {
  const [img] = images;
  const [artist] = artists;
  const [artistImage] = artist.images ?? [];
  const [releaseYear] = release_date.split('-');
  const { hours, minutes, seconds } = total_duration;
  const defaultCoverWidth = 128;

  return (
    <Stack space="L" className={styles.wrapper} direction="row">
      <div className={styles.cover}>
        {img.url && (
          <Image
            src={img.url}
            alt={name ?? ''}
            width={img.width ?? defaultCoverWidth}
            height={img.height ?? defaultCoverWidth}
            aria-hidden="true"
            loading="lazy"
          />
        )}
      </div>
      <Stack space="S" className={styles.info}>
        <span>アルバム</span>
        <h1 className={styles.name}>{name}</h1>
        <Stack space="none" className={styles.artist} direction="row">
          <Avatar size="sm" rounded="full" className={styles.avatar}>
            {artistImage && <AvatarImage alt={artist.name} src={artistImage.url} loading="lazy" />}
            <AvatarFallback>{artist.name?.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span>{artist.name}</span>
          {releaseYear && <span>{releaseYear}</span>}
          <span>
            {total_tracks}曲, {hours && `${hours}時間`} {minutes && `${minutes}分`} {seconds && `${seconds}秒`}
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
