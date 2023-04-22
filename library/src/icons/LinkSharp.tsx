import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const LinkSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M200.66,352H144a96,96,0,0,1,0-192h55.41"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"
      />
      <path
        d="M312.59,160H368a96,96,0,0,1,0,192H311.34"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"
      />
      <line
        x1="169.07"
        y1="256"
        x2="344.93"
        y2="256"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"
      />
    </svg>
  );
});
