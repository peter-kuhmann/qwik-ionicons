import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CodeWorking = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle
        cx="256"
        cy="256"
        r="26"
        style="stroke:currentColor;stroke-miterlimit:10;stroke-width:10px"
      />
      <circle
        cx="346"
        cy="256"
        r="26"
        style="stroke:currentColor;stroke-miterlimit:10;stroke-width:10px"
      />
      <circle
        cx="166"
        cy="256"
        r="26"
        style="stroke:currentColor;stroke-miterlimit:10;stroke-width:10px"
      />
      <polyline
        points="160 368 32 256 160 144"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px"
      />
      <polyline
        points="352 368 480 256 352 144"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px"
      />
    </svg>
  );
});
