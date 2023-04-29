import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const Exit = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M336,376V272H191a16,16,0,0,1,0-32H336V136a56.06,56.06,0,0,0-56-56H88a56.06,56.06,0,0,0-56,56V376a56.06,56.06,0,0,0,56,56H280A56.06,56.06,0,0,0,336,376Z" />
      <path d="M425.37,272l-52.68,52.69a16,16,0,0,0,22.62,22.62l80-80a16,16,0,0,0,0-22.62l-80-80a16,16,0,0,0-22.62,22.62L425.37,240H336v32Z" />
    </svg>
  );
});
