import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ArrowUpCircle = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm91.36,212.65a16,16,0,0,1-22.63.09L272,208.42V342a16,16,0,0,1-32,0V208.42l-52.73,52.32A16,16,0,1,1,164.73,238l80-79.39a16,16,0,0,1,22.54,0l80,79.39A16,16,0,0,1,347.36,260.65Z" />
    </svg>
  );
});
