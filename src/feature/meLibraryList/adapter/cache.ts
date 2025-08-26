export const meLibraryListKeys = {
  all: ['meLibraryList'] as const,
  list: () => [...meLibraryListKeys.all, 'list'] as const,
  page: (page: number) => [...meLibraryListKeys.all, 'list', page] as const,
};
