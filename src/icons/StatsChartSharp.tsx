import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const StatsChartSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M128,496H48V304h80Z" />
      <path d="M352,496H272V208h80Z" />
      <path d="M464,496H384V96h80Z" />
      <path d="M240,496H160V16h80Z" />
    </svg>
  );
});
