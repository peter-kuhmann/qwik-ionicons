import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const KeypadOutline = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <circle
        cx="256"
        cy="448"
        r="32"
        style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
      />
      <circle
        cx="256"
        cy="320"
        r="32"
        style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
      />
      <path
        d="M288,192a32,32,0,1,1-32-32A32,32,0,0,1,288,192Z"
        style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
      />
      <circle
        cx="256"
        cy="64"
        r="32"
        style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
      />
      <circle
        cx="384"
        cy="320"
        r="32"
        style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
      />
      <circle
        cx="384"
        cy="192"
        r="32"
        style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
      />
      <circle
        cx="384"
        cy="64"
        r="32"
        style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
      />
      <circle
        cx="128"
        cy="320"
        r="32"
        style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
      />
      <circle
        cx="128"
        cy="192"
        r="32"
        style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
      />
      <circle
        cx="128"
        cy="64"
        r="32"
        style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
      />
    </svg>
  );
});
