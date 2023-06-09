import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const PaperPlaneSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polygon points="496 16 15.88 208 195 289 448 64 223 317 304 496 496 16" />
    </svg>
  );
});
