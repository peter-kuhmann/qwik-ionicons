import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const AlbumsSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect x="128" y="64" width="256" height="32" />
      <rect x="96" y="112" width="320" height="32" />
      <path d="M464,448H48V160H464Z" />
    </svg>
  );
});
