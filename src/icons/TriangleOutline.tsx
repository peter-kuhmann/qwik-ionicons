import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const TriangleOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polygon
        points="48 448 256 64 464 448 48 448"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});