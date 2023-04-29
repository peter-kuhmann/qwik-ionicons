import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ReorderFourSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <line
        x1="102"
        y1="304"
        x2="410"
        y2="304"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
      />
      <line
        x1="102"
        y1="208"
        x2="410"
        y2="208"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
      />
      <line
        x1="102"
        y1="112"
        x2="410"
        y2="112"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
      />
      <line
        x1="102"
        y1="400"
        x2="410"
        y2="400"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
      />
    </svg>
  );
});
