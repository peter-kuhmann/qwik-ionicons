import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const FileTrayStacked = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M464,352H320a16,16,0,0,0-16,16,48,48,0,0,1-96,0,16,16,0,0,0-16-16H48a16,16,0,0,0-16,16v64a64.07,64.07,0,0,0,64,64H416a64.07,64.07,0,0,0,64-64V368A16,16,0,0,0,464,352Z" />
      <path d="M479.46,187.88,447.61,68.45C441.27,35.59,417.54,16,384,16H128c-16.8,0-31,4.69-42.1,13.94S67.66,52,64.4,68.4L32.54,187.88A15.9,15.9,0,0,0,32,192v48c0,35.29,28.71,80,64,80H416c35.29,0,64-44.71,64-80V192A15.9,15.9,0,0,0,479.46,187.88ZM440.57,176H320a15.92,15.92,0,0,0-16,15.82,48,48,0,1,1-96,0A15.92,15.92,0,0,0,192,176H71.43a2,2,0,0,1-1.93-2.52L95.71,75C99.26,56.59,109.52,48,128,48H384c18.59,0,28.84,8.53,32.25,26.85l26.25,98.63A2,2,0,0,1,440.57,176Z" />
    </svg>
  );
});
