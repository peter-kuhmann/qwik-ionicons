import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ContrastOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle
        cx="256"
        cy="256"
        r="208"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
      <path d="M256,464C141.12,464,48,370.88,48,256S141.12,48,256,48Z" />
    </svg>
  );
});