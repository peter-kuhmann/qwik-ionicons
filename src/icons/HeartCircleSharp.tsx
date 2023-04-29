import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const HeartCircleSharp = component$<IoniconProps>((props) => {
  return (
    <svg
      {...props}
      class={"ionicon" + (props.class ? " " + props.class : "")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm74.69,252.82C322.19,311.18,291,339.3,256,364.33c-35-25-66.19-53.15-74.69-63.51-20-24.37-29.58-49.4-29.3-76.5.31-31.06,25.22-56.33,55.53-56.33,22,0,37.3,12.41,46.19,22.76L256,193.5l2.27-2.75C267,180.29,282.42,168,304.46,168c30.31,0,55.22,25.27,55.53,56.33C360.27,251.42,350.68,276.45,330.69,300.82Z" />
    </svg>
  );
});
