import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const OpenSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polygon points="201.37 288 377.37 112 48 112 48 464 400 464 400 134.63 224 310.63 201.37 288" />
      <polygon points="320 48 320 80 409.37 80 377.37 112 400 134.63 432 102.63 432 192 464 192 464 48 320 48" />
    </svg>
  );
});
