import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const CogOutline = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M456.7,242.27l-26.08-4.2a8,8,0,0,1-6.6-6.82c-.5-3.2-1-6.41-1.7-9.51a8.08,8.08,0,0,1,3.9-8.62l23.09-12.82a8.05,8.05,0,0,0,3.9-9.92l-4-11a7.94,7.94,0,0,0-9.4-5l-25.89,5a8,8,0,0,1-8.59-4.11q-2.25-4.2-4.8-8.41a8.16,8.16,0,0,1,.7-9.52l17.29-19.94a8,8,0,0,0,.3-10.62l-7.49-9a7.88,7.88,0,0,0-10.5-1.51l-22.69,13.63a8,8,0,0,1-9.39-.9c-2.4-2.11-4.9-4.21-7.4-6.22a8,8,0,0,1-2.5-9.11l9.4-24.75A8,8,0,0,0,365,78.77l-10.2-5.91a8,8,0,0,0-10.39,2.21L327.77,95.91a7.15,7.15,0,0,1-8.5,2.5s-5.6-2.3-9.8-3.71A8,8,0,0,1,304,87l.4-26.45a8.07,8.07,0,0,0-6.6-8.42l-11.59-2a8.07,8.07,0,0,0-9.1,5.61l-8.6,25.05a8,8,0,0,1-7.79,5.41h-9.8a8.07,8.07,0,0,1-7.79-5.41l-8.6-25.05a8.07,8.07,0,0,0-9.1-5.61l-11.59,2a8.07,8.07,0,0,0-6.6,8.42l.4,26.45a8,8,0,0,1-5.49,7.71c-2.3.9-7.3,2.81-9.7,3.71-2.8,1-6.1.2-8.8-2.91L167.14,75.17A8,8,0,0,0,156.75,73l-10.2,5.91A7.94,7.94,0,0,0,143.25,89l9.4,24.75a8.06,8.06,0,0,1-2.5,9.11c-2.5,2-5,4.11-7.4,6.22a8,8,0,0,1-9.39.9L111,116.14a8,8,0,0,0-10.5,1.51l-7.49,9a8,8,0,0,0,.3,10.62l17.29,19.94a8,8,0,0,1,.7,9.52q-2.55,4-4.8,8.41a8.11,8.11,0,0,1-8.59,4.11l-25.89-5a8,8,0,0,0-9.4,5l-4,11a8.05,8.05,0,0,0,3.9,9.92L85.58,213a7.94,7.94,0,0,1,3.9,8.62c-.6,3.2-1.2,6.31-1.7,9.51a8.08,8.08,0,0,1-6.6,6.82l-26.08,4.2a8.09,8.09,0,0,0-7.1,7.92v11.72a7.86,7.86,0,0,0,7.1,7.92l26.08,4.2a8,8,0,0,1,6.6,6.82c.5,3.2,1,6.41,1.7,9.51a8.08,8.08,0,0,1-3.9,8.62L62.49,311.7a8.05,8.05,0,0,0-3.9,9.92l4,11a7.94,7.94,0,0,0,9.4,5l25.89-5a8,8,0,0,1,8.59,4.11q2.25,4.2,4.8,8.41a8.16,8.16,0,0,1-.7,9.52L93.28,374.62a8,8,0,0,0-.3,10.62l7.49,9a7.88,7.88,0,0,0,10.5,1.51l22.69-13.63a8,8,0,0,1,9.39.9c2.4,2.11,4.9,4.21,7.4,6.22a8,8,0,0,1,2.5,9.11l-9.4,24.75a8,8,0,0,0,3.3,10.12l10.2,5.91a8,8,0,0,0,10.39-2.21l16.79-20.64c2.1-2.6,5.5-3.7,8.2-2.6,3.4,1.4,5.7,2.2,9.9,3.61a8,8,0,0,1,5.49,7.71l-.4,26.45a8.07,8.07,0,0,0,6.6,8.42l11.59,2a8.07,8.07,0,0,0,9.1-5.61l8.6-25a8,8,0,0,1,7.79-5.41h9.8a8.07,8.07,0,0,1,7.79,5.41l8.6,25a8.07,8.07,0,0,0,9.1,5.61l11.59-2a8.07,8.07,0,0,0,6.6-8.42l-.4-26.45a8,8,0,0,1,5.49-7.71c4.2-1.41,7-2.51,9.6-3.51s5.8-1,8.3,2.1l17,20.94A8,8,0,0,0,355,439l10.2-5.91a7.93,7.93,0,0,0,3.3-10.12l-9.4-24.75a8.08,8.08,0,0,1,2.5-9.12c2.5-2,5-4.1,7.4-6.21a8,8,0,0,1,9.39-.9L401,395.66a8,8,0,0,0,10.5-1.51l7.49-9a8,8,0,0,0-.3-10.62l-17.29-19.94a8,8,0,0,1-.7-9.52q2.55-4.05,4.8-8.41a8.11,8.11,0,0,1,8.59-4.11l25.89,5a8,8,0,0,0,9.4-5l4-11a8.05,8.05,0,0,0-3.9-9.92l-23.09-12.82a7.94,7.94,0,0,1-3.9-8.62c.6-3.2,1.2-6.31,1.7-9.51a8.08,8.08,0,0,1,6.6-6.82l26.08-4.2a8.09,8.09,0,0,0,7.1-7.92V250A8.25,8.25,0,0,0,456.7,242.27ZM256,112A143.82,143.82,0,0,1,395.38,220.12,16,16,0,0,1,379.85,240l-105.24,0a16,16,0,0,1-13.91-8.09l-52.1-91.71a16,16,0,0,1,9.85-23.39A146.94,146.94,0,0,1,256,112ZM112,256a144,144,0,0,1,43.65-103.41,16,16,0,0,1,25.17,3.47L233.06,248a16,16,0,0,1,0,15.87l-52.67,91.7a16,16,0,0,1-25.18,3.36A143.94,143.94,0,0,1,112,256ZM256,400a146.9,146.9,0,0,1-38.19-4.95,16,16,0,0,1-9.76-23.44l52.58-91.55a16,16,0,0,1,13.88-8H379.9a16,16,0,0,1,15.52,19.88A143.84,143.84,0,0,1,256,400Z" />
    </svg>
  );
});
