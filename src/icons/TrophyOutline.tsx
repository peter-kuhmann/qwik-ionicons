import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const TrophyOutline = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <line
        x1="176"
        y1="464"
        x2="336"
        y2="464"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="256"
        y1="464"
        x2="256"
        y2="336"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M384,224c0-50.64-.08-134.63-.12-160a16,16,0,0,0-16-16l-223.79.26a16,16,0,0,0-16,15.95c0,30.58-.13,129.17-.13,159.79,0,64.28,83,112,128,112S384,288.28,384,224Z"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M128,96H48v16c0,55.22,33.55,112,80,112"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M384,96h80v16c0,55.22-33.55,112-80,112"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
