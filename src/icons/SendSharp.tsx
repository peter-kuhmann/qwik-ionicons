import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const SendSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M16,464,496,256,16,48V208l320,48L16,304Z" />
    </svg>
  );
});
