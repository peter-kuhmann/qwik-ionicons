import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const TabletPortraitOutline = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <rect
        x="80"
        y="16"
        width="352"
        height="480"
        rx="48"
        ry="48"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
