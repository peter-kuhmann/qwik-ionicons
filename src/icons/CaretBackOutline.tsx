import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CaretBackOutline = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M321.94,98,158.82,237.78a24,24,0,0,0,0,36.44L321.94,414c15.57,13.34,39.62,2.28,39.62-18.22V116.18C361.56,95.68,337.51,84.62,321.94,98Z" />
    </svg>
  );
});
