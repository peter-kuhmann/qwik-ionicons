import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const TrendingDownSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polyline
        points="352 368 464 368 464 256"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
      <polyline
        points="48 144 192 288 288 192 448 352"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
    </svg>
  );
});
