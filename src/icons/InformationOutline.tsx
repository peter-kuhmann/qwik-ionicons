import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const InformationOutline = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <polyline
        points="196 220 260 220 260 392"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:40px"
      />
      <line
        x1="187"
        y1="396"
        x2="325"
        y2="396"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:40px"
      />
      <path d="M256,160a32,32,0,1,1,32-32A32,32,0,0,1,256,160Z" />
    </svg>
  );
});
