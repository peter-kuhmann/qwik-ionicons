import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CaretForwardCircle = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM212,330.14V181.86a16,16,0,0,1,26.23-12.29l89.09,74.13a16,16,0,0,1,0,24.6l-89.09,74.13A16,16,0,0,1,212,330.14Z" />
    </svg>
  );
});
