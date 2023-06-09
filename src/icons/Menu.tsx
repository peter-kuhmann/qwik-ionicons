import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const Menu = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <line
        x1="88"
        y1="152"
        x2="424"
        y2="152"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"
      />
      <line
        x1="88"
        y1="256"
        x2="424"
        y2="256"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"
      />
      <line
        x1="88"
        y1="360"
        x2="424"
        y2="360"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px"
      />
    </svg>
  );
});
