import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const PauseSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M224,432H144V80h80Z" />
      <path d="M368,432H288V80h80Z" />
    </svg>
  );
});
