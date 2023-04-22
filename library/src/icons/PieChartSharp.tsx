import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const PieChartSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M58,362.09,51.49,347.5A224,224,0,0,1,256,32h16V266.37Z" />
      <path d="M304,66.46V287.11L94.62,380.78A208.31,208.31,0,0,0,272,480c114.69,0,208-93.31,208-208C480,168.19,403.55,81.9,304,66.46Z" />
    </svg>
  );
});
