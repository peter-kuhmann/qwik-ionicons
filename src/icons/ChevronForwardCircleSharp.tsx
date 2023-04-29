import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ChevronForwardCircleSharp = component$<IoniconProps>(
  (rawProps) => {
    const props = { ...rawProps };
    props.class = props.class ?? "" + " ionicon";
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48ZM216,374.63,193.37,352l96-96-96-96L216,137.37,334.63,256Z" />
      </svg>
    );
  }
);
