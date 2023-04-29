import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const FlashSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M432,208H288L320,16,80,304H224L192,496Z" />
    </svg>
  );
});
