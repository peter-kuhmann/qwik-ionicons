import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const Mail = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M424,80H88a56.06,56.06,0,0,0-56,56V376a56.06,56.06,0,0,0,56,56H424a56.06,56.06,0,0,0,56-56V136A56.06,56.06,0,0,0,424,80Zm-14.18,92.63-144,112a16,16,0,0,1-19.64,0l-144-112a16,16,0,1,1,19.64-25.26L256,251.73,390.18,147.37a16,16,0,0,1,19.64,25.26Z" />
    </svg>
  );
});
