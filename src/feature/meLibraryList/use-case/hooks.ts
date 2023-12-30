import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { meLibraryInteractor } from '.';

export const useMeLibraryList = ({ token }: { token: string }) => {
  const query = useInfiniteQuery({
    queryKey: ['meLibrary'],
    queryFn: async ({ pageParam }) => {
      return meLibraryInteractor.findAllLibrary({
        token,
        isThrowError: true,
        nextAlbum: pageParam.nextAlbum,
        nextPlaylist: pageParam.nextPlaylist,
      });
    },
    initialPageParam: {
      nextAlbum: 0,
      nextPlaylist: 0,
      hasNext: true,
    },
    select: (data) => ({
      pages: [...data.pages.map((page) => page.payload?.items ?? []).flat()],
      pageParams: {
        nextAlbum: data.pageParams[0]?.nextAlbum,
        nextPlaylist: data.pageParams[0]?.nextPlaylist,
      },
    }),
    getNextPageParam: (lastPage) => {
      if (lastPage.payload == null) return;
      const { nextAlbum, nextPlaylist } = lastPage.payload;

      return {
        nextAlbum: nextAlbum ?? -1,
        nextPlaylist: nextPlaylist ?? -1,
        hasNext: nextAlbum > -1 || nextPlaylist > -1,
      };
    },
    retry: false,
  });

  return useMemo(() => ({ ...query }), [query]);
};