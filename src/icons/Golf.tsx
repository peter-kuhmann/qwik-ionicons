import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const Golf = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M272,320.46V202.3l166.62-75.73a16,16,0,0,0,0-29.14l-176-80A16,16,0,0,0,240,32V191.66c0,.23,0,.47,0,.7v128.1q8-.45,16-.46T272,320.46Z" />
      <path d="M463.33,457.5c-8.56-42.85-35.11-78.74-76.78-103.8C354.05,334.15,313.88,322.4,272,320v79.75a16,16,0,1,1-32,0V320c-41.88,2.4-82.05,14.15-114.55,33.7-41.67,25.06-68.22,60.95-76.78,103.8a32.49,32.49,0,0,0,6.44,27.08C61.13,492,70,496,80,496H432c10,0,18.88-4.05,24.9-11.42A32.49,32.49,0,0,0,463.33,457.5Z" />
    </svg>
  );
});
