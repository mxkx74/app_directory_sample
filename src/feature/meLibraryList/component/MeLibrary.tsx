import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { MeLibraryList } from '@/feature/meLibraryList/component/MeLibraryList';
import { meLibraryInteractor } from '@/feature/meLibraryList/use-case';

export const MeLibrary = async () => {
  const queryClient = new QueryClient();
  const meLibraryInitData = await meLibraryInteractor.findAllLibrary({
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
      <MeLibraryList />
    </HydrationBoundary>
  );
};
