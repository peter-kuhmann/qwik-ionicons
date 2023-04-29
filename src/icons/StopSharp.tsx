import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const StopSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect x="80" y="80" width="352" height="352" />
    </svg>
  );
});
