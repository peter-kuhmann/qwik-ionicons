import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ChevronForwardCircleOutline = component$<IoniconProps>(
  (rawProps) => {
    const props = { ...rawProps };
    props.class = props.class ?? "" + " ionicon";
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M64,256c0,106,86,192,192,192s192-86,192-192S362,64,256,64,64,150,64,256Z"
          style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
        />
        <polyline
          points="216 352 312 256 216 160"
          style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
        />
      </svg>
    );
  }
);
