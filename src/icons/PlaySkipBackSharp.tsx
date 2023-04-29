import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const PlaySkipBackSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polygon points="143.47 64 143.47 227.52 416 64 416 448 143.47 284.48 143.47 448 96 448 96 64 143.47 64" />
    </svg>
  );
});
