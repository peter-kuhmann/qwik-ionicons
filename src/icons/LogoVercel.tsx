import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const LogoVercel = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill-rule="evenodd" d="M256,48,496,464H16Z" />
    </svg>
  );
});
