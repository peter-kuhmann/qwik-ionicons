import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const NavigateSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polygon points="480 32 32 240 272 240 272 480 480 32" />
    </svg>
  );
});
