import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const PrismSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      id="icons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M256,16,16,352,256,496,496,352Zm-20,96.82V437.35L73.73,340Z" />
    </svg>
  );
});
