import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const WalletSharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M47.5,104H432V51.52a16,16,0,0,0-19.14-15.69l-368,60.48a16,16,0,0,0-12,10.47A39.69,39.69,0,0,1,47.5,104Z" />
      <path d="M463.5,128H47.5a16,16,0,0,0-16,16V432a16,16,0,0,0,16,16h416a16,16,0,0,0,16-16V144A16,16,0,0,0,463.5,128ZM368,320a32,32,0,1,1,32-32A32,32,0,0,1,368,320Z" />
      <path d="M31.33,259.5V116c0-12.33,5.72-18.48,15.42-20,35.2-5.53,108.58-8.5,108.58-8.5s-8.33,16-27.33,16V128c18.5,0,31.33,23.5,31.33,23.5L84.83,236Z" />
    </svg>
  );
});
