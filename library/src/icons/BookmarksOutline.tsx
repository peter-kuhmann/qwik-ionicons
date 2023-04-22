import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const BookmarksOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M128,80V64a48.14,48.14,0,0,1,48-48H400a48.14,48.14,0,0,1,48,48V432l-80-64"
        style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M320,96H112a48.14,48.14,0,0,0-48,48V496L216,368,368,496V144A48.14,48.14,0,0,0,320,96Z"
        style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
