import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const NotificationsCircleOutline = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
        style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"
      />
      <path d="M365.2,313c-16.33-19.34-27.86-27.47-27.86-80.8,0-48.86-25.78-66.23-47-74.67a11.39,11.39,0,0,1-6.34-6.68C280.29,138.6,269.88,128,256,128s-24.31,10.6-28,22.86a11.35,11.35,0,0,1-6.33,6.68c-21.24,8.46-47,25.8-47,74.67,0,53.33-11.54,61.46-27.87,80.8-6.77,8-.65,23,11.19,23H354C365.77,336,371.94,321,365.2,313Z" />
      <path d="M220.24,352a4,4,0,0,0-4,4.42C218.49,375.14,235.11,384,256,384c20.67,0,37.14-9.15,39.66-27.52a4,4,0,0,0-4-4.48Z" />
    </svg>
  );
});
