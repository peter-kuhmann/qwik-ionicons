import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const Attach = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M216.08,192V335.85a40.08,40.08,0,0,0,80.15,0l.13-188.55a67.94,67.94,0,1,0-135.87,0V337.12a95.51,95.51,0,1,0,191,0V159.74"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
    </svg>
  );
});
