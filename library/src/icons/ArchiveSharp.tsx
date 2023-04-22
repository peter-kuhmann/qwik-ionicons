import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ArchiveSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect x="32" y="48" width="448" height="80" rx="12" ry="12" />
      <path d="M64,160V440a24,24,0,0,0,24,24H424a24,24,0,0,0,24-24V160ZM256,390.63,169.32,304,192,281.32,240,329.37V208h32V329.37l48.07-48.07,22.61,22.64Z" />
    </svg>
  );
});
