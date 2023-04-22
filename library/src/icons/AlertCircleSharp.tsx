import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const AlertCircleSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polygon
        points="240 304 272 304 278 144 234 144 240 304"
        style="fill:none"
      />
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm20,319.91H236v-40h40ZM272,304H240l-6-160h44Z" />
    </svg>
  );
});
