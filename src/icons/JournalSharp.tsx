import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const JournalSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M290,32H104A24,24,0,0,0,80,56V456a24,24,0,0,0,24,24H290Z" />
      <path d="M408,32H350V480h58a24,24,0,0,0,24-24V56A24,24,0,0,0,408,32Z" />
    </svg>
  );
});
