import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const Wifi = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M346.65,304.3a136,136,0,0,0-180.71,0,21,21,0,1,0,27.91,31.38,94,94,0,0,1,124.89,0,21,21,0,0,0,27.91-31.4Z" />
      <path d="M256.28,183.7a221.47,221.47,0,0,0-151.8,59.92,21,21,0,1,0,28.68,30.67,180.28,180.28,0,0,1,246.24,0,21,21,0,1,0,28.68-30.67A221.47,221.47,0,0,0,256.28,183.7Z" />
      <path d="M462,175.86a309,309,0,0,0-411.44,0,21,21,0,1,0,28,31.29,267,267,0,0,1,355.43,0,21,21,0,0,0,28-31.31Z" />
      <circle cx="256.28" cy="393.41" r="32" />
    </svg>
  );
});
