import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ChevronExpandOutline = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M136 208L256 104L376 208"
        stroke="currentColor"
        fill="none"
        stroke-width="32"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M136 304L256 408L376 304"
        stroke="currentColor"
        fill="none"
        stroke-width="32"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});
