import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CaretForwardSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <polygon points="144 448 368 256 144 64 144 448" />
    </svg>
  );
});
