import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CloudyNightOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M388.31,272c47.75,0,89.77-27.77,107.69-68.92-14.21,6.18-30.9,8.61-47.38,8.61A116.31,116.31,0,0,1,332.31,95.38c0-16.48,2.43-33.17,8.61-47.38C299.77,65.92,272,107.94,272,155.69a116.31,116.31,0,0,0,3.44,28.18"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M90.61,306.85A16.07,16.07,0,0,0,104,293.6C116.09,220.17,169.63,176,232,176c57.93,0,96.62,37.75,112.2,77.74a15.84,15.84,0,0,0,12.2,9.87c50,8.15,91.6,41.54,91.6,99.59C448,422.6,399.4,464,340,464H106c-49.5,0-90-24.7-90-79.2C16,336.33,54.67,312.58,90.61,306.85Z"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
