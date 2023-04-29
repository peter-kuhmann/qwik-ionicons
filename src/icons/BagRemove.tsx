import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const BagRemove = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M454.66,169.4A31.86,31.86,0,0,0,432,160H368V144a112,112,0,0,0-224,0v16H80a32,32,0,0,0-32,32V408c0,39,33,72,72,72H392a72.22,72.22,0,0,0,50.48-20.55A69.48,69.48,0,0,0,464,409.25V192A31.78,31.78,0,0,0,454.66,169.4ZM320,336H192a16,16,0,0,1,0-32H320a16,16,0,0,1,0,32Zm16-176H176V144a80,80,0,0,1,160,0Z" />
    </svg>
  );
});
