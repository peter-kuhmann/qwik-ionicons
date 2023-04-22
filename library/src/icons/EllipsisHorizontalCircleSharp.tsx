import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const EllipsisHorizontalCircleSharp = component$<IoniconProps>(
  (props) => {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48ZM166,282a26,26,0,1,1,26-26A26,26,0,0,1,166,282Zm90,0a26,26,0,1,1,26-26A26,26,0,0,1,256,282Zm90,0a26,26,0,1,1,26-26A26,26,0,0,1,346,282Z" />
      </svg>
    );
  }
);
