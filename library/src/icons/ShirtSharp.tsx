import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ShirtSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256,42c-33.88,0-64-10-64-10l0,2A64,64,0,0,0,320,34l0-2S289.88,42,256,42Z" />
      <path d="M352,44c-5.49,47.76-46.79,85-96,85s-90.51-37.24-96-85L16,94,34,208l61.71,7.42c7.08.9,7.1.9,7.1,8.19L96,480H416l-6.81-256.39c-.21-7-.21-7,7.1-8.19L478,208,496,94Z" />
    </svg>
  );
});
