import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const LogoBitbucket = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M483.13,32.23a19.65,19.65,0,0,0-2.54-.23h-449C23,31.88,16.12,38.88,16,47.75a11.44,11.44,0,0,0,.23,2.8L81.53,461.8a22.52,22.52,0,0,0,7,12.95h0A20,20,0,0,0,102,480H415.18a15.45,15.45,0,0,0,15.34-13.42L469.4,218.67H325.19l-18.46,112H205.21l-25.73-148H475.06l20.76-132C497.09,41.92,491.44,33.63,483.13,32.23Z" />
    </svg>
  );
});
