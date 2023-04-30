import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const FilterSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect x="16" y="120" width="480" height="48" />
      <rect x="96" y="232" width="320" height="48" />
      <rect x="192" y="344" width="128" height="48" />
    </svg>
  );
});
