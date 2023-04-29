import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CubeSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <polygon points="48 170 48 366.92 240 480 240 284 48 170" />
      <path d="M272,480,464,366.92V170L272,284ZM448,357.64h0Z" />
      <polygon points="448 144 256 32 64 144 256 256 448 144" />
    </svg>
  );
});
