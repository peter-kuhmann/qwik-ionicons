import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ChevronCollapse = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M117.863 88.282c-8.681 10.017-7.598 25.174 2.419 33.855l120 104c9.02 7.818 22.416 7.818 31.436 0l120-104c10.017-8.681 11.1-23.838 2.419-33.855s-23.839-11.099-33.855-2.418L256 176.241 151.718 85.864c-10.016-8.681-25.174-7.598-33.855 2.418zm0 335.436c-8.681-10.017-7.598-25.174 2.419-33.855l120-104c9.02-7.818 22.416-7.818 31.436 0l120 104c10.017 8.681 11.1 23.838 2.419 33.855s-23.839 11.099-33.855 2.418L256 335.759l-104.282 90.377c-10.016 8.681-25.174 7.598-33.855-2.418z" />
    </svg>
  );
});
