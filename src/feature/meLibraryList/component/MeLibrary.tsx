import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/feature/auth/setting';
import { MeLibraryList } from '@/feature/meLibraryList/component/MeLibraryList';
import { meLibraryInteractor } from '@/feature/meLibraryList/use-case';

export const MeLibrary = async () => {
  const queryClient = new QueryClient();
  const session = await getServerSession(authOptions);
  const token = session?.access_token ?? '';

  const meLibraryInitData = await meLibraryInteractor.findAllLibrary({
    token: token ?? '',
    isThrowError: true,
  });

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['meLibrary'],
    queryFn: () => meLibraryInitData,
    initialPageParam: {
      nextAlbum: 0,
      nextPlaylist: 0,
      hasNext: true,
    },
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <MeLibraryList token={token} />
    </HydrationBoundary>
  );
};
