import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ChevronUpCircle = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48ZM363.31,307.31a16,16,0,0,1-22.62,0L256,222.63l-84.69,84.68a16,16,0,0,1-22.62-22.62l96-96a16,16,0,0,1,22.62,0l96,96A16,16,0,0,1,363.31,307.31Z" />
    </svg>
  );
});
