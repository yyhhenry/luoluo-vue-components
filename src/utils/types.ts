type Maybe<T extends {}> = {
  [Key in keyof T]?: unknown;
};
export const isObjectMaybe = <T extends {}>(obj: unknown): obj is Maybe<T> =>
  typeof obj === 'object' && obj != null;

export const isArrayOf = <T>(obj: unknown, is: (u: unknown) => u is T): obj is T[] => {
  return Array.isArray(obj) && obj.every(is);
};
