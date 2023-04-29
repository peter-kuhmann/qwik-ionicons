import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const Browsers = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M416,48H96a64,64,0,0,0-64,64V400a64,64,0,0,0,64,64H416a64,64,0,0,0,64-64V112A64,64,0,0,0,416,48Zm24,96H72a8,8,0,0,1-8-8V112A32.09,32.09,0,0,1,96,80H416a32.09,32.09,0,0,1,32,32v24A8,8,0,0,1,440,144Z" />
    </svg>
  );
});
