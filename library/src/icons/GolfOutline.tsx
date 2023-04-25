import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const GolfOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polyline
        points="256 400 256 32 432 112 256 192"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M256,336c-87,0-175.3,43.2-191.64,124.74C62.39,470.57,68.57,480,80,480H432c11.44,0,17.62-9.43,15.65-19.26C431.3,379.2,343,336,256,336Z"
        style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
      />
    </svg>
  );
});
