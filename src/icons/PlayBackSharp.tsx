import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const PlayBackSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polygon points="496 400 256 256 496 112 496 400" />
      <polygon points="256 400 16 256 256 112 256 400" />
    </svg>
  );
});
