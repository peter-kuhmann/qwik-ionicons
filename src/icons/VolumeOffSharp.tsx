import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const VolumeOffSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <polygon points="237.65 176.1 144 176.1 144 335.9 237.65 335.9 368 440 368 72 237.65 176.1" />
    </svg>
  );
});
