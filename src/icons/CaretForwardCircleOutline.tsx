import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CaretForwardCircleOutline = component$<IoniconProps>(
  (rawProps) => {
    const props = { ...rawProps };
    props.class = props.class ?? "" + " ionicon";
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M238.23,342.43l89.09-74.13a16,16,0,0,0,0-24.6l-89.09-74.13A16,16,0,0,0,212,181.86V330.14A16,16,0,0,0,238.23,342.43Z" />
        <path
          d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
          style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
        />
      </svg>
    );
  }
);
