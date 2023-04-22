import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ReturnUpBackSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polyline
        points="112 160 48 224 112 288"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
      <polyline
        points="64 224 464 224 464 352"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
    </svg>
  );
});