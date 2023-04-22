import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const PinOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <circle
        cx="256"
        cy="96"
        r="64"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path d="M272,164a9,9,0,0,0-9-9H249a9,9,0,0,0-9,9V457.56a32.09,32.09,0,0,0,2.49,12.38l10.07,24a3.92,3.92,0,0,0,6.88,0l10.07-24A32.09,32.09,0,0,0,272,457.56Z" />
      <circle cx="280" cy="72" r="24" />
    </svg>
  );
});
