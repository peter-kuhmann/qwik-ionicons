import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ColorFilterOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle
        cx="256"
        cy="184"
        r="120"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
      <circle
        cx="344"
        cy="328"
        r="120"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
      <circle
        cx="168"
        cy="328"
        r="120"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
