import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const StopOutline = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect
        x="96"
        y="96"
        width="320"
        height="320"
        rx="24"
        ry="24"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
