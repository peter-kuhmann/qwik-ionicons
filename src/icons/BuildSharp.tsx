import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const BuildSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M230,209.2,32,405.58,106.65,480,304.24,281.83c46.47,17.46,105.52,12.54,143-24.78,40.44-40.32,40.35-108,16.81-156.79l-87.33,87.06-52.32-52.13,87.33-87.06C363,24.46,294.67,24.34,254.23,64.66,216.2,102.57,211.45,162.26,230,209.2Z" />
    </svg>
  );
});
