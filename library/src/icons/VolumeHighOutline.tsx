import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const VolumeHighOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M126,192H56a8,8,0,0,0-8,8V312a8,8,0,0,0,8,8h69.65a15.93,15.93,0,0,1,10.14,3.54l91.47,74.89A8,8,0,0,0,240,392V120a8,8,0,0,0-12.74-6.43l-91.47,74.89A15,15,0,0,1,126,192Z"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M320,320c9.74-19.38,16-40.84,16-64,0-23.48-6-44.42-16-64"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M368,368c19.48-33.92,32-64.06,32-112s-12-77.74-32-112"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M416,416c30-46,48-91.43,48-160S446,143,416,96"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
