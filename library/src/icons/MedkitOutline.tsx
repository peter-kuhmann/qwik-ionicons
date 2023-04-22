import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const MedkitOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect
        x="32"
        y="112"
        width="448"
        height="352"
        rx="48"
        ry="48"
        style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M144,112V80a32,32,0,0,1,32-32H336a32,32,0,0,1,32,32v32"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="256"
        y1="208"
        x2="256"
        y2="368"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="336"
        y1="288"
        x2="176"
        y2="288"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});