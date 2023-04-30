import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const IdCard = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg
      {...props}
      id="icons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M368,16H144A64.07,64.07,0,0,0,80,80V432a64.07,64.07,0,0,0,64,64H368a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,368,16ZM333.48,284.51c7.57,8.17,11.27,19.16,10.39,30.94C342.14,338.91,324.25,358,304,358s-38.17-19.09-39.88-42.55c-.86-11.9,2.81-22.91,10.34-31S292.4,272,304,272A39.65,39.65,0,0,1,333.48,284.51ZM192,80a16,16,0,0,1,16-16h96a16,16,0,0,1,0,32H208A16,16,0,0,1,192,80ZM381,443.83a12.05,12.05,0,0,1-9.31,4.17H236.31a12.05,12.05,0,0,1-9.31-4.17,13,13,0,0,1-2.76-10.92c3.25-17.56,13.38-32.31,29.3-42.66C267.68,381.06,285.6,376,304,376s36.32,5.06,50.46,14.25c15.92,10.35,26.05,25.1,29.3,42.66A13,13,0,0,1,381,443.83Z" />
    </svg>
  );
});
