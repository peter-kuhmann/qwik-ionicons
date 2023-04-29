import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const TvSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M488,384H24a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H488a8,8,0,0,1,8,8V376A8,8,0,0,1,488,384Z" />
      <rect x="112" y="400" width="288" height="32" rx="4" ry="4" />
    </svg>
  );
});
