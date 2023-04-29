import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const UnlinkSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      id="icons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M200.66,352H144a96,96,0,0,1,0-192h55.41"
        fill="none"
        stroke="currentColor"
        stroke-linecap="square"
        stroke-linejoin="round"
        stroke-width="48"
      />
      <path
        d="M312.59,160H368a96,96,0,0,1,0,192H311.34"
        fill="none"
        stroke="currentColor"
        stroke-linecap="square"
        stroke-linejoin="round"
        stroke-width="48"
      />
    </svg>
  );
});
