import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CopyOutline = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect
        x="128"
        y="128"
        width="336"
        height="336"
        rx="57"
        ry="57"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M383.5,128l.5-24a56.16,56.16,0,0,0-56-56H112a64.19,64.19,0,0,0-64,64V328a56.16,56.16,0,0,0,56,56h24"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
