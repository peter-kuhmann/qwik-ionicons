import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ReorderTwoSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <line
        x1="118"
        y1="304"
        x2="394"
        y2="304"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
      />
      <line
        x1="118"
        y1="208"
        x2="394"
        y2="208"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
      />
    </svg>
  );
});
