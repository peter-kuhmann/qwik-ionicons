import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const LogoFigma = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M336,176a80,80,0,0,0,0-160H176a80,80,0,0,0,0,160,80,80,0,0,0,0,160,80,80,0,1,0,80,80V176Z" />
      <circle cx="336" cy="256" r="80" />
    </svg>
  );
});
