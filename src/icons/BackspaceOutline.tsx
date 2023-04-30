import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const BackspaceOutline = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M135.19,390.14A28.79,28.79,0,0,0,156.87,400H403.13A29,29,0,0,0,432,371.13V140.87A29,29,0,0,0,403.13,112H156.87a28.84,28.84,0,0,0-21.67,9.84v0L46.33,256l88.86,134.11Z"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="336.67"
        y1="192.33"
        x2="206.66"
        y2="322.34"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="336.67"
        y1="322.34"
        x2="206.66"
        y2="192.33"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="336.67"
        y1="192.33"
        x2="206.66"
        y2="322.34"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="336.67"
        y1="322.34"
        x2="206.66"
        y2="192.33"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
