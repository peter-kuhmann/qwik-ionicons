import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CheckmarkSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polyline
        points="416 128 192 384 96 288"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:44px"
      />
    </svg>
  );
});
