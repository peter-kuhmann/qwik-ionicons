import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const GridOutline = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect
        x="48"
        y="48"
        width="176"
        height="176"
        rx="20"
        ry="20"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <rect
        x="288"
        y="48"
        width="176"
        height="176"
        rx="20"
        ry="20"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <rect
        x="48"
        y="288"
        width="176"
        height="176"
        rx="20"
        ry="20"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <rect
        x="288"
        y="288"
        width="176"
        height="176"
        rx="20"
        ry="20"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
