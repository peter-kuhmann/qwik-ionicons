import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ChevronUpSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polyline
        points="112 328 256 184 400 328"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px"
      />
    </svg>
  );
});
