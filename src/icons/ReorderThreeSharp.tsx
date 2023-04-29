import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ReorderThreeSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <line
        x1="102"
        y1="256"
        x2="410"
        y2="256"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
      />
      <line
        x1="102"
        y1="176"
        x2="410"
        y2="176"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
      />
      <line
        x1="102"
        y1="336"
        x2="410"
        y2="336"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
      />
    </svg>
  );
});
