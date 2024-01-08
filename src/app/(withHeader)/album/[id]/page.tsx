import { AlbumPage } from '@/component/page';

export default function Album({ params }: { params: { id: string } }) {
  return <AlbumPage {...params} />;
}
