import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const EyeOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M255.66,112c-77.94,0-157.89,45.11-220.83,135.33a16,16,0,0,0-.27,17.77C82.92,340.8,161.8,400,255.66,400,348.5,400,429,340.62,477.45,264.75a16.14,16.14,0,0,0,0-17.47C428.89,172.28,347.8,112,255.66,112Z"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <circle
        cx="256"
        cy="256"
        r="80"
        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
      />
    </svg>
  );
});
