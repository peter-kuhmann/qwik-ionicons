import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const Navigate = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M272,464a16,16,0,0,1-16-16.42V264.13a8,8,0,0,0-8-8H64.41a16.31,16.31,0,0,1-15.49-10.65,16,16,0,0,1,8.41-19.87l384-176.15a16,16,0,0,1,21.22,21.19l-176,384A16,16,0,0,1,272,464Z" />
    </svg>
  );
});
