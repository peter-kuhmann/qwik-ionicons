import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ChevronDownCircleSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256,464c114.87,0,208-93.13,208-208S370.87,48,256,48,48,141.13,48,256,141.13,464,256,464ZM160,193.37l96,96,96-96L374.63,216,256,334.63,137.37,216Z" />
    </svg>
  );
});
