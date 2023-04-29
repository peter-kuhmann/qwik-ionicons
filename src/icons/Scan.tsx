import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const Scan = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M342,444h46a56,56,0,0,0,56-56V342"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
      />
      <path
        d="M444,170V124a56,56,0,0,0-56-56H342"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
      />
      <path
        d="M170,444H124a56,56,0,0,1-56-56V342"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
      />
      <path
        d="M68,170V124a56,56,0,0,1,56-56h46"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
      />
    </svg>
  );
});
