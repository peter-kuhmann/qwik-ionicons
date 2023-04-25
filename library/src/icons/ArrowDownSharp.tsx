import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ArrowDownSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polyline
        points="112 268 256 412 400 268"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px"
      />
      <line
        x1="256"
        y1="392"
        x2="256"
        y2="100"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px"
      />
    </svg>
  );
});
