import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const LogoVercel = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill-rule="evenodd" d="M256,48,496,464H16Z" />
    </svg>
  );
});
