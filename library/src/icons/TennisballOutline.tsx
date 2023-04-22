import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const TennisballOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle
        cx="256"
        cy="256"
        r="208"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M461.43,271.44c-5.09.37-8.24.56-13.43.56-114.88,0-208-93.12-208-208,0-5.37.2-8.69.6-14"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M49.65,240.56S58.84,240,64,240c114.88,0,208,93.12,208,208,0,5.38-.61,14-.61,14"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
