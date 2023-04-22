import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const Pencil = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polygon
        points="358.62 129.28 86.49 402.08 70 442 109.92 425.51 382.72 153.38 358.62 129.28"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
      />
      <path
        d="M413.07,74.84,401.28,86.62l24.1,24.1,11.79-11.79a16.51,16.51,0,0,0,0-23.34l-.75-.75A16.51,16.51,0,0,0,413.07,74.84Z"
        style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
      />
    </svg>
  );
});
