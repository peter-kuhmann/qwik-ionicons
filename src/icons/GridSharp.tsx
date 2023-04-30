import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const GridSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M240,240H32V32H240Z" />
      <path d="M480,240H272V32H480Z" />
      <path d="M240,480H32V272H240Z" />
      <path d="M480,480H272V272H480Z" />
    </svg>
  );
});
