import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const LockOpen = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M368,192H192V112a64,64,0,1,1,128,0,16,16,0,0,0,32,0,96,96,0,1,0-192,0v80H144a64.07,64.07,0,0,0-64,64V432a64.07,64.07,0,0,0,64,64H368a64.07,64.07,0,0,0,64-64V256A64.07,64.07,0,0,0,368,192Z" />
    </svg>
  );
});
