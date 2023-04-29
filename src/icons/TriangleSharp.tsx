import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const TriangleSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <polygon points="256 32 20 464 492 464 256 32" />
    </svg>
  );
});
