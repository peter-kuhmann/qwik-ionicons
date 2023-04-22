import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const Videocam = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M464,384.39a32,32,0,0,1-13-2.77,15.77,15.77,0,0,1-2.71-1.54l-82.71-58.22h0A32,32,0,0,1,352,295.7V216.3a32,32,0,0,1,13.58-26.16l82.71-58.22a15.77,15.77,0,0,1,2.71-1.54,32,32,0,0,1,45,29.24V352.38a32,32,0,0,1-32,32Z" />
      <path d="M268,400H84a68.07,68.07,0,0,1-68-68V180a68.07,68.07,0,0,1,68-68H268.48A67.6,67.6,0,0,1,336,179.52V332A68.07,68.07,0,0,1,268,400Z" />
    </svg>
  );
});
