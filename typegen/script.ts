export type TypeGen<T> = T extends string | number | boolean
  ? ReturnType<T["valueOf"]>
  : T;
