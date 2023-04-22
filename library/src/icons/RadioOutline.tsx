import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const RadioOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle cx="256" cy="256.02" r="32" />
      <path
        d="M184.25,192.25a96,96,0,0,0,0,127.52"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M327.77,319.77a96,96,0,0,0,0-127.52"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M133.28,141.28a168,168,0,0,0,0,229.44"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M378.72,370.72a168,168,0,0,0,0-229.44"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M435,416a240.34,240.34,0,0,0,0-320"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M77,96a240.34,240.34,0,0,0,0,320"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});