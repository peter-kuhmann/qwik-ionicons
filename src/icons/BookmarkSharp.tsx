import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const BookmarkSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M416,480,256,357.41,96,480V32H416Z" />
    </svg>
  );
});
