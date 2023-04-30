import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const AccessibilitySharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M448,112c-66.82,17.92-119.55,32-192,32S130.82,129.92,64,112L48,163c48,20.53,96.71,35.16,147.2,53.2L144,496l56.4,16L246,336h20l45.6,176L368,496,316.8,216.2C367.26,199.93,416,183.53,464,164Z" />
      <path d="M256,112a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,112Z" />
    </svg>
  );
});
