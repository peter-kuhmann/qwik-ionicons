import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const FunnelSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <polygon points="0 48 192 288 192 416 320 464 320 288 512 48 0 48" />
    </svg>
  );
});
