import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const Crop = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M458,346H192a26,26,0,0,1-26-26V54a22,22,0,0,0-44,0v68H54a22,22,0,0,0,0,44h68V320a70.08,70.08,0,0,0,70,70H346v68a22,22,0,0,0,44,0V390h68a22,22,0,0,0,0-44Z" />
      <path d="M214,166H320a26,26,0,0,1,26,26V298a22,22,0,0,0,44,0V192a70.08,70.08,0,0,0-70-70H214a22,22,0,0,0,0,44Z" />
    </svg>
  );
});
