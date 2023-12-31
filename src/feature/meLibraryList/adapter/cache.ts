export const meLibraryListKeys = {
  all: ['meLibraryList'] as const,
  list: () => [...meLibraryListKeys.all, 'list'] as const,
};
