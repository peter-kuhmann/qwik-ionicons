import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const TvOutline = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <rect
        x="32"
        y="96"
        width="448"
        height="272"
        rx="32.14"
        ry="32.14"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="128"
        y1="416"
        x2="384"
        y2="416"
        style="stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
    </svg>
  );
});
