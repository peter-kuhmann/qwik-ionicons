import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const VolumeHighSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M320,320c9.74-19.38,16-40.84,16-64,0-23.48-6-44.42-16-64"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
      <path
        d="M368,368c19.48-33.92,32-64.06,32-112s-12-77.74-32-112"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
      <path
        d="M416,416c30-46,48-91.43,48-160S446,143,416,96"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
      <polygon points="125.65 176.1 32 176.1 32 335.9 125.65 335.9 256 440 256 72 125.65 176.1" />
    </svg>
  );
});
