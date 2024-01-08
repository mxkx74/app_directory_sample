import { Suspense } from 'react';
import { AlbumInfo } from '@/feature/albumsInfo/component/AlbumInfo';

type Props = { id: string };

export const AlbumPage = ({ id }: Props) => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <AlbumInfo id={id} />
    </Suspense>
  );
};
