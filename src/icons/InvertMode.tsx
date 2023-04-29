import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const InvertMode = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle
        fill="none"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="32"
        cx="256"
        cy="256"
        r="208"
      />
      <path d="M256,176V336a80,80,0,0,0,0-160Z" />
      <path d="M256,48V176a80,80,0,0,0,0,160V464C141.12,464,48,370.88,48,256S141.12,48,256,48Z" />
    </svg>
  );
});
