import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CaretUpSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polygon points="448 368 256 144 64 368 448 368" />
    </svg>
  );
});
