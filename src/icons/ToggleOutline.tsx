import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ToggleOutline = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle
        cx="368"
        cy="256"
        r="128"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
      <rect
        x="16"
        y="128"
        width="480"
        height="256"
        rx="128"
        ry="128"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
