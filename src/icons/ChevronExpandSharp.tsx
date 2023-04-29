import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ChevronExpandSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M136 208L256 104L376 208"
        fill="none"
        stroke="currentColor"
        stroke-width="48"
        stroke-linecap="square"
      />
      <path
        d="M136 304L256 408L376 304"
        fill="none"
        stroke="currentColor"
        stroke-width="48"
        stroke-linecap="square"
      />
    </svg>
  );
});
