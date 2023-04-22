import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const EggOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M256,48C192,48,96,171.69,96,286.55S160,464,256,464s160-62.59,160-177.45S320,48,256,48Z"
        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
      />
    </svg>
  );
});
