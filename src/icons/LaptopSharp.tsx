import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const LaptopSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M477.29,400A27.75,27.75,0,0,0,480,388V108a28,28,0,0,0-28-28H60a28,28,0,0,0-28,28V388a27.75,27.75,0,0,0,2.71,12H0v32H512V400Z" />
    </svg>
  );
});
