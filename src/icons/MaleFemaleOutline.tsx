import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const MaleFemaleOutline = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <circle
        cx="216"
        cy="200"
        r="136"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="216"
        y1="352"
        x2="216"
        y2="480"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="272"
        y1="416"
        x2="160"
        y2="416"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <polyline
        points="432 112 432 32 352 32"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="335.28"
        y1="128.72"
        x2="432"
        y2="32"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
