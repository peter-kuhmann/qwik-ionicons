import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ShapesOutline = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <polygon
        points="336 320 32 320 184 48 336 320"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M265.32,194.51A144,144,0,1,1,192,320"
        style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
