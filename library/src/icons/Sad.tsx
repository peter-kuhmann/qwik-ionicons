import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const Sad = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM184,208a24,24,0,1,1-24,24A23.94,23.94,0,0,1,184,208ZM160.33,357.83c12-40.3,50.2-69.83,95.62-69.83s83.62,29.53,95.71,69.83A8,8,0,0,1,343.84,368H168.15A8,8,0,0,1,160.33,357.83ZM328,256a24,24,0,1,1,24-24A23.94,23.94,0,0,1,328,256Z" />
    </svg>
  );
});
