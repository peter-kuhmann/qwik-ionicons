import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const JournalOutline = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <rect
        x="96"
        y="48"
        width="320"
        height="416"
        rx="48"
        ry="48"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="320"
        y1="48"
        x2="320"
        y2="464"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:60px"
      />
    </svg>
  );
});
