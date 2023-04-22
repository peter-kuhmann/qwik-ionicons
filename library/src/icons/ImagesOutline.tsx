import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ImagesOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M432,112V96a48.14,48.14,0,0,0-48-48H64A48.14,48.14,0,0,0,16,96V352a48.14,48.14,0,0,0,48,48H80"
        style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px"
      />
      <rect
        x="96"
        y="128"
        width="400"
        height="336"
        rx="45.99"
        ry="45.99"
        style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px"
      />
      <ellipse
        cx="372.92"
        cy="219.64"
        rx="30.77"
        ry="30.55"
        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
      />
      <path
        d="M342.15,372.17,255,285.78a30.93,30.93,0,0,0-42.18-1.21L96,387.64"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M265.23,464,383.82,346.27a31,31,0,0,1,41.46-1.87L496,402.91"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
