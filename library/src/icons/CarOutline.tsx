import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CarOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M80,224l37.78-88.15C123.93,121.5,139.6,112,157.11,112H354.89c17.51,0,33.18,9.5,39.33,23.85L432,224"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <rect
        x="80"
        y="224"
        width="352"
        height="144"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <polyline
        points="112 368 112 400 80 400 80 368"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <polyline
        points="432 368 432 400 400 400 400 368"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <circle
        cx="144"
        cy="288"
        r="16"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <circle
        cx="368"
        cy="288"
        r="16"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
