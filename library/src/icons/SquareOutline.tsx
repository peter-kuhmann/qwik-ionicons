import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const SquareOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M416,448H96a32.09,32.09,0,0,1-32-32V96A32.09,32.09,0,0,1,96,64H416a32.09,32.09,0,0,1,32,32V416A32.09,32.09,0,0,1,416,448Z"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});