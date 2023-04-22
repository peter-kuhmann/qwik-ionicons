import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const StarOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M480,208H308L256,48,204,208H32l140,96L118,464,256,364,394,464,340,304Z"
        style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
