import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ArrowUp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polyline
        points="112 244 256 100 400 244"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
      />
      <line
        x1="256"
        y1="120"
        x2="256"
        y2="412"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
      />
    </svg>
  );
});
