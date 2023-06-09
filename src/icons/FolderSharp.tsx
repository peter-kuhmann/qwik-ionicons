import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const FolderSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M16,420a28,28,0,0,0,28,28H468a28,28,0,0,0,28-28V208H16Z" />
      <path d="M496,124a28,28,0,0,0-28-28H212.84l-48-32H44A28,28,0,0,0,16,92v84H496Z" />
    </svg>
  );
});
