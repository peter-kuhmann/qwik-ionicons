import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ClipboardSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M420,48H352V28a12,12,0,0,0-12-12H172a12,12,0,0,0-12,12V48H92A12,12,0,0,0,80,60V484a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V60A12,12,0,0,0,420,48Zm-84.13,64H176.13V80H335.87Z" />
    </svg>
  );
});
