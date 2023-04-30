import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const SquareSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect x="48" y="48" width="416" height="416" />
    </svg>
  );
});
