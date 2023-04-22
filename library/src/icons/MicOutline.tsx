import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const MicOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <line
        x1="192"
        y1="448"
        x2="320"
        y2="448"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M384,208v32c0,70.4-57.6,128-128,128h0c-70.4,0-128-57.6-128-128V208"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="256"
        y1="368"
        x2="256"
        y2="448"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M256,64a63.68,63.68,0,0,0-64,64V239c0,35.2,29,65,64,65s64-29,64-65V128C320,92,292,64,256,64Z"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
