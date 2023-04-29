import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const BookmarkSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M416,480,256,357.41,96,480V32H416Z" />
    </svg>
  );
});
