import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const BatteryHalfSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M17,384H449V128H17ZM49,160H417V352H49Z" />
      <rect x="70.69" y="182.92" width="185.31" height="146.16" />
      <rect x="465" y="202.67" width="32" height="106.67" />
    </svg>
  );
});
