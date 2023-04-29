import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const BarcodeSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <polyline
        points="400 400.33 448 400 448 112 400 112.33"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
      />
      <polyline
        points="112 112 64 112.33 64 400.33 112 400"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="384"
        y1="192"
        x2="384"
        y2="320"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="320"
        y1="160"
        x2="320"
        y2="352"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="256"
        y1="176"
        x2="256"
        y2="336"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="192"
        y1="160"
        x2="192"
        y2="352"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="128"
        y1="192"
        x2="128"
        y2="320"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
