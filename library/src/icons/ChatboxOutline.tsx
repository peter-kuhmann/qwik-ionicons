import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ChatboxOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M408,64H104a56.16,56.16,0,0,0-56,56V312a56.16,56.16,0,0,0,56,56h40v80l93.72-78.14a8,8,0,0,1,5.13-1.86H408a56.16,56.16,0,0,0,56-56V120A56.16,56.16,0,0,0,408,64Z"
        style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
