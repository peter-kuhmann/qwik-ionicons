import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const FunnelSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <polygon points="0 48 192 288 192 416 320 464 320 288 512 48 0 48" />
    </svg>
  );
});
