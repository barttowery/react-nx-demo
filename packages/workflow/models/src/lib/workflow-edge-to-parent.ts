export const EdgeTypeToParent = {
  NONE: 'NONE',
  YES: 'YES',
  NO: 'NO',
} as const;

export type EdgeTypeToParent =
  (typeof EdgeTypeToParent)[keyof typeof EdgeTypeToParent];
