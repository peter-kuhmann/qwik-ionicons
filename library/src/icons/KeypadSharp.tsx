import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const KeypadSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect x="80" y="16" width="96" height="96" rx="8" ry="8" />
      <rect x="208" y="16" width="96" height="96" rx="8" ry="8" />
      <rect x="336" y="16" width="96" height="96" rx="8" ry="8" />
      <rect x="80" y="144" width="96" height="96" rx="8" ry="8" />
      <rect x="208" y="144" width="96" height="96" rx="8" ry="8" />
      <rect x="336" y="144" width="96" height="96" rx="8" ry="8" />
      <rect x="80" y="272" width="96" height="96" rx="8" ry="8" />
      <rect x="208" y="272" width="96" height="96" rx="8" ry="8" />
      <rect x="208" y="400" width="96" height="96" rx="8" ry="8" />
      <rect x="336" y="272" width="96" height="96" rx="8" ry="8" />
    </svg>
  );
});
