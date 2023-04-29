import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const FilterCircleOutline = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="32"
        stroke-miterlimit="10"
        d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
      />
      <line
        fill="none"
        stroke="currentColor"
        stroke-width="32"
        stroke-linecap="round"
        stroke-linejoin="round"
        x1="144"
        y1="208"
        x2="368"
        y2="208"
      />
      <line
        fill="none"
        stroke="currentColor"
        stroke-width="32"
        stroke-linecap="round"
        stroke-linejoin="round"
        x1="176"
        y1="272"
        x2="336"
        y2="272"
      />
      <line
        fill="none"
        stroke="currentColor"
        stroke-width="32"
        stroke-linecap="round"
        stroke-linejoin="round"
        x1="224"
        y1="336"
        x2="288"
        y2="336"
      />
    </svg>
  );
});
