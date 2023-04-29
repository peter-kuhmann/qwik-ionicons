import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const FlashlightSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <polygon points="330 16 287.32 58.7 453.3 224.68 496 182 330 16" />
      <ellipse cx="224.68" cy="287.3" rx="20.03" ry="19.96" style="fill:none" />
      <path d="M429.21,243.85,268,82.59,249.65,168,16,402l94,94L344.23,262.2Zm-189,56.07a20,20,0,1,1,0-25.25A20,20,0,0,1,240.19,299.92Z" />
    </svg>
  );
});
