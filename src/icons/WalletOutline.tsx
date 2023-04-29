import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const WalletOutline = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <rect
        x="48"
        y="144"
        width="416"
        height="288"
        rx="48"
        ry="48"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M411.36,144V114A50,50,0,0,0,352,64.9L88.64,109.85A50,50,0,0,0,48,159v49"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
      <path d="M368,320a32,32,0,1,1,32-32A32,32,0,0,1,368,320Z" />
    </svg>
  );
});
