import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const GiftOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M256,104v56h56a56,56,0,1,0-56-56Z"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
      <path
        d="M256,104c0,15.46,0,56,0,56H200a56,56,0,1,1,56-56Z"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
      <rect
        x="64"
        y="160"
        width="384"
        height="112"
        rx="32"
        ry="32"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M416,272V416a48,48,0,0,1-48,48H144a48,48,0,0,1-48-48V272"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="256"
        y1="160"
        x2="256"
        y2="464"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
