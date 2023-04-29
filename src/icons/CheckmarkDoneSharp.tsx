import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CheckmarkDoneSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polyline
        points="465 127 241 384 149 292"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:44px"
      />
      <line
        x1="140"
        y1="385"
        x2="47"
        y2="292"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:44px"
      />
      <line
        x1="363"
        y1="127"
        x2="236"
        y2="273"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:44px"
      />
    </svg>
  );
});
