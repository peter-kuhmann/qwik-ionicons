import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const SearchCircleOutline = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z"
        style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
      />
      <path
        d="M232,160a72,72,0,1,0,72,72A72,72,0,0,0,232,160Z"
        style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
      />
      <line
        x1="283.64"
        y1="283.64"
        x2="336"
        y2="336"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
    </svg>
  );
});
