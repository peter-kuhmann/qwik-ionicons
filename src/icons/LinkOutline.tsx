import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const LinkOutline = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M208,352H144a96,96,0,0,1,0-192h64"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:36px"
      />
      <path
        d="M304,160h64a96,96,0,0,1,0,192H304"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:36px"
      />
      <line
        x1="163.29"
        y1="256"
        x2="350.71"
        y2="256"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:36px"
      />
    </svg>
  );
});
