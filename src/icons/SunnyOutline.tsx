import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const SunnyOutline = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <line
        x1="256"
        y1="48"
        x2="256"
        y2="96"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
      <line
        x1="256"
        y1="416"
        x2="256"
        y2="464"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
      <line
        x1="403.08"
        y1="108.92"
        x2="369.14"
        y2="142.86"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
      <line
        x1="142.86"
        y1="369.14"
        x2="108.92"
        y2="403.08"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
      <line
        x1="464"
        y1="256"
        x2="416"
        y2="256"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
      <line
        x1="96"
        y1="256"
        x2="48"
        y2="256"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
      <line
        x1="403.08"
        y1="403.08"
        x2="369.14"
        y2="369.14"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
      <line
        x1="142.86"
        y1="142.86"
        x2="108.92"
        y2="108.92"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
      <circle
        cx="256"
        cy="256"
        r="80"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      />
    </svg>
  );
});
