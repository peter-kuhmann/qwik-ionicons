import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const BowlingBallOutline = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      id="icons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <circle
        cx="256"
        cy="256"
        r="208"
        fill="none"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="32"
      />
      <circle cx="288" cy="200" r="24" />
      <circle cx="296" cy="128" r="24" />
      <circle cx="360" cy="168" r="24" />
    </svg>
  );
});
