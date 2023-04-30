import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const PlayForwardSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polygon points="16 400 256 256 16 112 16 400" />
      <polygon points="256 400 496 256 256 112 256 400" />
    </svg>
  );
});
