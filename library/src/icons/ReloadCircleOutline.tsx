import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ReloadCircleOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
      />
      <path
        d="M341.54,197.85l-11.37-13.23a103.37,103.37,0,1,0,22.71,105.84"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
      <path d="M367.32,162a8.44,8.44,0,0,0-6,2.54l-59.54,59.54a8.61,8.61,0,0,0,6.09,14.71h59.54a8.62,8.62,0,0,0,8.62-8.62V170.61a8.61,8.61,0,0,0-8.68-8.63Z" />
    </svg>
  );
});
