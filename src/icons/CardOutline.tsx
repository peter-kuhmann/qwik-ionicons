import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CardOutline = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect
        x="48"
        y="96"
        width="416"
        height="320"
        rx="56"
        ry="56"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="48"
        y1="192"
        x2="464"
        y2="192"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:60px"
      />
      <rect
        x="128"
        y="300"
        width="48"
        height="20"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:60px"
      />
    </svg>
  );
});
