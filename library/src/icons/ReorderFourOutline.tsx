import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ReorderFourOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <line
        x1="96"
        y1="304"
        x2="416"
        y2="304"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="96"
        y1="208"
        x2="416"
        y2="208"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="96"
        y1="112"
        x2="416"
        y2="112"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="96"
        y1="400"
        x2="416"
        y2="400"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});