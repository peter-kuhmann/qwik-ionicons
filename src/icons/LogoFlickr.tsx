import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const LogoFlickr = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256,32h0C132.8,32,32,132.8,32,256h0c0,123.2,100.8,224,224,224h0c123.2,0,224-100.8,224-224h0C480,132.8,379.2,32,256,32ZM173.84,312A56,56,0,1,1,228,257.84,56,56,0,0,1,173.84,312Zm168,0A56,56,0,1,1,396,257.84,56,56,0,0,1,341.84,312Z" />
    </svg>
  );
});
