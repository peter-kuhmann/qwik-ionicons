import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CellularSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M496,432H400V80h96Z" />
      <path d="M368,432H272V160h96Z" />
      <path d="M240,432H144V224h96Z" />
      <path d="M112,432H16V288h96Z" />
    </svg>
  );
});
