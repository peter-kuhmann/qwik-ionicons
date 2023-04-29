import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const PauseSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M224,432H144V80h80Z" />
      <path d="M368,432H288V80h80Z" />
    </svg>
  );
});
