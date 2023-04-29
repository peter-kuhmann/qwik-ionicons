import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const FlameOutline = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M112,320c0-93,124-165,96-272,66,0,192,96,192,272a144,144,0,0,1-288,0Z"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M320,368c0,57.71-32,80-64,80s-64-22.29-64-80,40-86,32-128C266,240,320,310.29,320,368Z"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
