import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const PieChartOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M256.05,80.65Q263.94,80,272,80c106,0,192,86,192,192S378,464,272,464A192.09,192.09,0,0,1,89.12,330.65"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
      <path
        d="M256,48C141.12,48,48,141.12,48,256a207.29,207.29,0,0,0,18.09,85L256,256Z"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});