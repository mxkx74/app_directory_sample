export type KeyPath<T extends Record<string, unknown>, K = keyof T> = K extends string
  ? T[K] extends Record<string, unknown>
    ? `${K}.${KeyPath<T[K]>}`
    : K
  : never;
