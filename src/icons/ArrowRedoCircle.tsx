import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ArrowRedoCircle = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M48,256c0,114.87,93.13,208,208,208s208-93.13,208-208S370.87,48,256,48,48,141.13,48,256Zm96,66.67c5.45-61.45,34.14-117.09,122.87-117.09V168.26a8.32,8.32,0,0,1,14-6L365.42,242a8.2,8.2,0,0,1,0,11.94L281,333.71a8.32,8.32,0,0,1-14-6V290.42c-57.07,0-84.51,13.47-108.58,38.68C152.93,334.75,143.35,330.42,144,322.67Z" />
    </svg>
  );
});
