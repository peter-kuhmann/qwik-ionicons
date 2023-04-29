import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ThunderstormOutline = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <line
        x1="120"
        y1="352"
        x2="96"
        y2="400"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="136"
        y1="432"
        x2="120"
        y2="464"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="400"
        y1="352"
        x2="376"
        y2="400"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <line
        x1="416"
        y1="432"
        x2="400"
        y2="464"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <polyline
        points="208 304 192 400 240 400 240 480 320 368 272 368 288 304"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
      <path
        d="M404.33,152.89H392.2C384.71,84.85,326.14,32,256,32a136.39,136.39,0,0,0-128.63,90.67H122.8c-49.94,0-90.8,40.8-90.8,90.66h0C32,263.2,72.86,304,122.8,304H404.33C446,304,480,270,480,228.44h0C480,186.89,446,152.89,404.33,152.89Z"
        style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      />
    </svg>
  );
});
