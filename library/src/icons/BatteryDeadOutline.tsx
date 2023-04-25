import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const BatteryDeadOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect
        x="31"
        y="144"
        width="400"
        height="224"
        rx="45.7"
        ry="45.7"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
      <line
        x1="479"
        y1="218.67"
        x2="479"
        y2="293.33"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
    </svg>
  );
});
