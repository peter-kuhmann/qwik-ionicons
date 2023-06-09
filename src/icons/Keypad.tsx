import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const Keypad = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256,400a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M256,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M256,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M256,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M384,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M384,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M384,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M128,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M128,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M128,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
    </svg>
  );
});
