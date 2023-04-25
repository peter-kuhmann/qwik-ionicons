import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ListSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <line
        x1="144"
        y1="144"
        x2="464"
        y2="144"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:48px"
      />
      <line
        x1="144"
        y1="256"
        x2="464"
        y2="256"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:48px"
      />
      <line
        x1="144"
        y1="368"
        x2="464"
        y2="368"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:48px"
      />
      <rect
        x="64"
        y="128"
        width="32"
        height="32"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
      />
      <rect
        x="64"
        y="240"
        width="32"
        height="32"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
      />
      <rect
        x="64"
        y="352"
        width="32"
        height="32"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});