import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const LogoAlipay = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M102.41,32C62.38,32,32,64.12,32,103.78V408.23C32,447.86,64.38,480,104.41,480h303.2c40,0,72.39-32.14,72.39-71.77v-3.11c-1.35-.56-115.47-48.57-174.5-76.7-39.82,48.57-91.18,78-144.5,78-90.18,0-120.8-78.22-78.1-129.72,9.31-11.22,25.15-21.94,49.73-28,38.45-9.36,99.64,5.85,157,24.61a309.41,309.41,0,0,0,25.46-61.67H138.34V194h91.13V162.17H119.09V144.42H229.47V99s0-7.65,7.82-7.65h44.55v53H391v17.75H281.84V194h89.08a359.41,359.41,0,0,1-37.72,94.43c27,9.69,49.31,18.88,67.39,24.89,60.32,20,77.23,22.45,79.41,22.7V103.78C480,64.12,447.6,32,407.61,32H102.41ZM152,274.73q-5.81.06-11.67.63c-11.3,1.13-32.5,6.07-44.09,16.23-34.74,30-13.94,84.93,56.37,84.93,40.87,0,81.71-25.9,113.79-67.37-41.36-20-77-34.85-114.4-34.42Z" />
    </svg>
  );
});
