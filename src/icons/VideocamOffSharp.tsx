import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const VideocamOffSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect
        x="232"
        y="-5.59"
        width="32"
        height="507.18"
        transform="translate(-102.72 248) rotate(-45)"
      />
      <path d="M32,112a16,16,0,0,0-16,16V384a16,16,0,0,0,16,16H320a15.89,15.89,0,0,0,9.34-3l-285-285Z" />
      <path d="M336,208V128a16,16,0,0,0-16-16H179.63L425.07,357.44,496,400V112Z" />
    </svg>
  );
});
