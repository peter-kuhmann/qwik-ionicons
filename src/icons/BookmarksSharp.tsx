import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const BookmarksSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polygon points="112 0 112 48 416 48 416 416 464 448 464 0 112 0" />
      <polygon points="48 80 48 512 216 388 384 512 384 80 48 80" />
    </svg>
  );
});
