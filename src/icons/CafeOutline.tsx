import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CafeOutline = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M368,80h64a16,16,0,0,1,16,16v34a46,46,0,0,1-46,46H368"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M96,80H368a0,0,0,0,1,0,0V272a80,80,0,0,1-80,80H176a80,80,0,0,1-80-80V80A0,0,0,0,1,96,80Z"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="64"
        y1="416"
        x2="400"
        y2="416"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
