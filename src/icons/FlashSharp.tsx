import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const FlashSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M432,208H288L320,16,80,304H224L192,496Z" />
    </svg>
  );
});
