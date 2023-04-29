import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const FileTrayFullSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <rect x="128" y="128" width="256" height="38" />
      <rect x="112" y="192" width="288" height="38" />
      <path d="M448,64H64L32,256V448H480V256ZM436,256H320a64,64,0,0,1-128,0H76L98,106H414Z" />
    </svg>
  );
});
