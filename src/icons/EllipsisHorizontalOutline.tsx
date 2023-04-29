import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const EllipsisHorizontalOutline = component$<IoniconProps>(
  (rawProps) => {
    const props = { ...rawProps };
    props.class = props.class ?? "" + " ionicon";
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <circle
          cx="256"
          cy="256"
          r="32"
          style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
        />
        <circle
          cx="416"
          cy="256"
          r="32"
          style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
        />
        <circle
          cx="96"
          cy="256"
          r="32"
          style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
        />
      </svg>
    );
  }
);
