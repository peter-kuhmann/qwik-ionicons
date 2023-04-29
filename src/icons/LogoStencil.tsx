import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const LogoStencil = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M188.8,334.07H386.13L279.47,448H83.2Z" />
      <path d="M512,199H106.61L0,313H405.39Z" />
      <path d="M232.2,64H428.8L322.62,177.93H125.87Z" />
    </svg>
  );
});
