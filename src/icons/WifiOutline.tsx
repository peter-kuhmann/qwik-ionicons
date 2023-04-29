import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const WifiOutline = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M332.41,310.59a115,115,0,0,0-152.8,0"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M393.46,249.54a201.26,201.26,0,0,0-274.92,0"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M447.72,182.11a288,288,0,0,0-383.44,0"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path d="M256,416a32,32,0,1,1,32-32A32,32,0,0,1,256,416Z" />
    </svg>
  );
});
