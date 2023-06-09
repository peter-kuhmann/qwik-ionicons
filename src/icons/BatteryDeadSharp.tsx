import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const BatteryDeadSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect
        x="32"
        y="144"
        width="400"
        height="224"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
      <line
        x1="480"
        y1="218.67"
        x2="480"
        y2="293.33"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
    </svg>
  );
});
