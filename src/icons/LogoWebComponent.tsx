import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const LogoWebComponent = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <polygon
        points="179.9 388 179.9 388 103.74 256 179.9 388"
        style="fill:none"
      />
      <polygon
        points="179.9 388 332.11 388 408.26 256 332.11 124 179.9 124 103.74 256 179.9 388"
        style="fill:none"
      />
      <polygon
        points="103.74 256 179.9 124 179.9 124 103.74 256"
        style="fill:none"
      />
      <polygon points="496 256 376 48 239.74 48 195.9 124 332.11 124 408.26 256 332.11 388 195.9 388 239.74 464 376 464 496 256" />
      <polygon points="179.9 388 103.74 256 179.9 124 179.9 124 223.74 48 136 48 16 256 136 464 223.74 464 179.9 388 179.9 388" />
    </svg>
  );
});
