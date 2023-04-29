import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const BalloonSharp = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = props.class ?? "" + " ionicon";
  return (
    <svg
      {...props}
      id="icons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M391,307.27c32.75-46.35,46.59-101.63,39-155.68h0C416.47,55.59,327.38-11.54,231.38,2S68.24,104.53,81.73,200.53c7.57,53.89,36.12,103.16,80.37,138.74,26.91,21.64,57.59,36.1,86.05,41.33l-8.36,45.23a8,8,0,0,0,9,9.38L279,431c15.9,35.87,41.65,60.48,78.41,75l14.88,5.88,11.77-29.75-14.88-5.89c-26.35-10.42-44.48-26.16-57-49.92l21.84-3.07a8,8,0,0,0,6.05-11.49l-20.49-41.16C345.56,357.73,371.07,335.42,391,307.27ZM230.18,322.93c-41.26-16.32-76.3-52.7-91.45-94.94l-5.4-15.06,30.12-10.8,5.4,15.06c14.5,40.44,47.27,65.77,73.1,76l14.88,5.88-11.77,29.76Z" />
    </svg>
  );
});
