import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const StopCircleOutline = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
        style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
      />
      <path d="M310.4,336H201.6A25.62,25.62,0,0,1,176,310.4V201.6A25.62,25.62,0,0,1,201.6,176H310.4A25.62,25.62,0,0,1,336,201.6V310.4A25.62,25.62,0,0,1,310.4,336Z" />
    </svg>
  );
});
