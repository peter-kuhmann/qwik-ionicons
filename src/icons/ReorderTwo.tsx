import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ReorderTwo = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <line
        x1="118"
        y1="304"
        x2="394"
        y2="304"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
      />
      <line
        x1="118"
        y1="208"
        x2="394"
        y2="208"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
      />
    </svg>
  );
});
