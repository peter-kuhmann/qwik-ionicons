import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CartSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle cx="176" cy="416" r="32" />
      <circle cx="400" cy="416" r="32" />
      <polygon points="167.78 304 429.12 304 467.52 112 133.89 112 125.42 64 32 64 32 96 98.58 96 146.58 368 432 368 432 336 173.42 336 167.78 304" />
    </svg>
  );
});
