import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const MenuOutline = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <line
        x1="80"
        y1="160"
        x2="432"
        y2="160"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
      <line
        x1="80"
        y1="256"
        x2="432"
        y2="256"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
      <line
        x1="80"
        y1="352"
        x2="432"
        y2="352"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
    </svg>
  );
});
