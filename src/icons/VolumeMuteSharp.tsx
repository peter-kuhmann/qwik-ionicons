import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const VolumeMuteSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <line
        x1="416"
        y1="432"
        x2="64"
        y2="80"
        style="fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
      />
      <path d="M352,256c0-24.56-5.81-47.88-17.75-71.27L327,170.47,298.48,185l7.27,14.25C315.34,218.06,320,236.62,320,256a112.91,112.91,0,0,1-.63,11.74l27.32,27.32A148.8,148.8,0,0,0,352,256Z" />
      <path d="M416,256c0-51.19-13.08-83.89-34.18-120.06l-8.06-13.82-27.64,16.12,8.06,13.82C373.07,184.44,384,211.83,384,256c0,25.93-3.89,46.21-11,65.33l24.5,24.51C409.19,319.68,416,292.42,416,256Z" />
      <path d="M480,256c0-74.26-20.19-121.11-50.51-168.61L420.88,73.9l-27,17.22,8.61,13.49C429.82,147.38,448,189.5,448,256c0,48.76-9.4,84-24.82,115.55l23.7,23.7C470.16,351.39,480,309,480,256Z" />
      <polygon points="256 72 182.4 130.78 256 204.37 256 72" />
      <polygon points="32 176.1 32 335.9 125.65 335.9 256 440 256 339.63 92.47 176.1 32 176.1" />
    </svg>
  );
});
