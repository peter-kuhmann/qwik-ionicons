import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ColorWandOutline = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <rect
        fill="none"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="32"
        x="280.48"
        y="122.9"
        width="63.03"
        height="378.2"
        rx="31.52"
        transform="translate(-129.23 312) rotate(-45)"
      />
      <path d="M178.38,178.38h0a31.64,31.64,0,0,0,0,44.75L223.25,268,268,223.25l-44.87-44.87A31.64,31.64,0,0,0,178.38,178.38Z" />
      <line
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="32"
        stroke-linecap="round"
        x1="48"
        y1="192"
        x2="96"
        y2="192"
      />
      <line
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="32"
        stroke-linecap="round"
        x1="90.18"
        y1="90.18"
        x2="124.12"
        y2="124.12"
      />
      <line
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="32"
        stroke-linecap="round"
        x1="192"
        y1="48"
        x2="192"
        y2="96"
      />
      <line
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="32"
        stroke-linecap="round"
        x1="293.82"
        y1="90.18"
        x2="259.88"
        y2="124.12"
      />
      <line
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="32"
        stroke-linecap="round"
        x1="124.12"
        y1="259.88"
        x2="90.18"
        y2="293.82"
      />
    </svg>
  );
});
