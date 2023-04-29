import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const PawSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M442.8,361.82C434,336.72,413.49,324,393.69,311.7c-17.23-10.71-33.5-20.83-44.14-39C320.22,222.37,304.11,192,256.06,192s-64.21,30.38-93.61,80.69c-10.65,18.21-27,28.35-44.25,39.08-19.8,12.31-40.27,25-49.1,50.05A78.06,78.06,0,0,0,64,390.11C64,430.85,96.45,464,132.4,464s83.31-18.13,123.76-18.13S343.31,464,379.71,464,448,430.85,448,390.11A78.3,78.3,0,0,0,442.8,361.82Z" />
      <ellipse cx="72" cy="216" rx="56" ry="72" />
      <ellipse cx="184" cy="120" rx="56" ry="72" />
      <ellipse cx="328" cy="120" rx="56" ry="72" />
      <ellipse cx="440" cy="216" rx="56" ry="72" />
    </svg>
  );
});
