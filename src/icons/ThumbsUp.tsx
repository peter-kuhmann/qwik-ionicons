import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ThumbsUp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M472.06,334,327.9,327.87c-4.61-.36-23.9-1.21-23.9-25.87,0-23.81,19.16-25.33,24.14-25.88L472.06,270c12.67.13,23.94,14.43,23.94,32S484.73,333.87,472.06,334ZM330.61,202.33,437.35,194C450,194,464,210.68,464,227.88v.33c0,16.32-11.14,29.62-24.88,29.79l-108.45-1.73C304,253,304,236.83,304,229.88,304,207,325.8,202.73,330.61,202.33ZM421.85,480l-89.37-8.93C308,470.14,304,453.82,304,443.59c0-18.38,13.41-24.6,26.67-24.6l91-3c14.54.23,26.32,14.5,26.32,32S436.32,479.66,421.85,480Zm34.36-71.5-126.4-6.21c-9.39-.63-25.81-3-25.81-26.37,0-12,4.35-25.61,25-27.53l127.19-3.88C469.35,344.65,480,358,480,375.91S469.35,408.34,456.21,408.49Z" />
      <path
        d="M133.55,238.06A15.85,15.85,0,0,1,126,240h0a15.82,15.82,0,0,0,7.51-1.92Z"
        style="fill:none"
      />
      <path
        d="M174.14,168.78l.13-.23-.13.23c-20.5,35.51-30.36,54.95-33.82,62h0C143.79,223.71,153.66,204.27,174.14,168.78Z"
        style="fill:none"
      />
      <path d="M139.34,232.84l1-2a16.27,16.27,0,0,1-6.77,7.25A16.35,16.35,0,0,0,139.34,232.84Z" />
      <path d="M316.06,52.62C306.63,39.32,291,32,272,32a16,16,0,0,0-14.31,8.84c-3,6.07-15.25,24-28.19,42.91-18,26.33-40.35,59.07-55.23,84.8l-.13.23c-20.48,35.49-30.35,54.93-33.82,62h0l-1,2a16.35,16.35,0,0,1-5.79,5.22l0,0A15.82,15.82,0,0,1,126,240H100.69A84.69,84.69,0,0,0,16,324.69V363.3A84.69,84.69,0,0,0,100.69,448h48.79a17.55,17.55,0,0,1,9.58,2.89C182,465.87,225.34,480,272,480c7.45,0,14.19-.14,20.27-.38a8,8,0,0,0,6.2-12.68l-.1-.14C289.8,454.41,288,441,288,432a61.2,61.2,0,0,1,5.19-24.77,17.36,17.36,0,0,0,0-14.05,63.81,63.81,0,0,1,0-50.39,17.32,17.32,0,0,0,0-14,62.15,62.15,0,0,1,0-49.59,18.13,18.13,0,0,0,0-14.68A60.33,60.33,0,0,1,288,239c0-8.2,2-21.3,8-31.19a15.63,15.63,0,0,0,1.14-13.64c-.38-1-.76-2.07-1.13-3.17a24.84,24.84,0,0,1-.86-11.58c3-19.34,9.67-36.29,16.74-54.16,3.08-7.78,6.27-15.82,9.22-24.26C327.25,83.43,325.41,65.8,316.06,52.62Z" />
    </svg>
  );
});
