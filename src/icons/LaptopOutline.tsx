import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const LaptopOutline = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect
        x="48"
        y="96"
        width="416"
        height="304"
        rx="32.14"
        ry="32.14"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="16"
        y1="416"
        x2="496"
        y2="416"
        style="stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
    </svg>
  );
});
