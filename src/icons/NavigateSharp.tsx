import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const NavigateSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <polygon points="480 32 32 240 272 240 272 480 480 32" />
    </svg>
  );
});
