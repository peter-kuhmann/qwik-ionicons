import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const LogOut = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M160,256a16,16,0,0,1,16-16H320V136c0-32-33.79-56-64-56H104a56.06,56.06,0,0,0-56,56V376a56.06,56.06,0,0,0,56,56H264a56.06,56.06,0,0,0,56-56V272H176A16,16,0,0,1,160,256Z" />
      <path d="M459.31,244.69l-80-80a16,16,0,0,0-22.62,22.62L409.37,240H320v32h89.37l-52.68,52.69a16,16,0,1,0,22.62,22.62l80-80a16,16,0,0,0,0-22.62Z" />
    </svg>
  );
});