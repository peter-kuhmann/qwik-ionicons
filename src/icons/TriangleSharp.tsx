import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const TriangleSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polygon points="256 32 20 464 492 464 256 32" />
    </svg>
  );
});
