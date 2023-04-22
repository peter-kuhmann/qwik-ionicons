type ExcludeMethods<T> = Pick<
  T,
  { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]
>;

export type IoniconProps = {
  id?: string;
  class?: string;
  width?: string;
  height?: string;
  style?: Partial<Omit<ExcludeMethods<CSSStyleDeclaration>, "parentRule">>;
  [rest: string]: unknown;
};
