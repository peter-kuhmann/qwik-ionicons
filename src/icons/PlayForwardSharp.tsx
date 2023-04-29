import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const PlayForwardSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <polygon points="16 400 256 256 16 112 16 400" />
      <polygon points="256 400 496 256 256 112 256 400" />
    </svg>
  );
});
