import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CardSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M32,416a16,16,0,0,0,16,16H464a16,16,0,0,0,16-16V222H32ZM98,278a8,8,0,0,1,8-8h92a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H106a8,8,0,0,1-8-8Z" />
      <path d="M464,80H48A16,16,0,0,0,32,96v66H480V96A16,16,0,0,0,464,80Z" />
    </svg>
  );
});
