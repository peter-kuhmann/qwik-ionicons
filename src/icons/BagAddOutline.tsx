import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const BagAddOutline = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg
      {...props}
      id="icons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <line
        x1="256"
        y1="256"
        x2="256"
        y2="384"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
      <line
        x1="320"
        y1="320"
        x2="192"
        y2="320"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
      <path
        d="M80,176a16,16,0,0,0-16,16V408c0,30.24,25.76,56,56,56H392c30.24,0,56-24.51,56-54.75V192a16,16,0,0,0-16-16Z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        fill-rule="evenodd"
      />
      <path
        d="M160,176V144a96,96,0,0,1,96-96h0a96,96,0,0,1,96,96v32"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        fill-rule="evenodd"
      />
    </svg>
  );
});
