import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ServerOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <ellipse
        cx="256"
        cy="128"
        rx="192"
        ry="80"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
      <path
        d="M448,214c0,44.18-86,80-192,80S64,258.18,64,214"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
      <path
        d="M448,300c0,44.18-86,80-192,80S64,344.18,64,300"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
      <path
        d="M64,127.24V384.76C64,428.52,150,464,256,464s192-35.48,192-79.24V127.24"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
    </svg>
  );
});
