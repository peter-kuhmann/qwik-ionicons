import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const RepeatSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polyline
        points="320 120 368 168 320 216"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
      <polyline
        points="352 168 64 168 64 264"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
      <polyline
        points="192 392 144 344 192 296"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
      <polyline
        points="160 344 448 344 448 248"
        style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
    </svg>
  );
});
