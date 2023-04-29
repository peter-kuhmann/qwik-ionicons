import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const Ban = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle
        fill="none"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="48"
        cx="256"
        cy="256"
        r="200"
      />
      <line
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="48"
        x1="114.58"
        y1="114.58"
        x2="397.42"
        y2="397.42"
      />
    </svg>
  );
});
