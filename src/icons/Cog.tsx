import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const Cog = component$<IoniconProps>((rawProps) => {
  const props = { ...rawProps };
  props.class = ((props.class ?? "") + " ionicon").trim();
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M464,249.93a10.58,10.58,0,0,0-9.36-9.94L429,235.84a5.42,5.42,0,0,1-4.5-4.67c-.49-3.15-1-6.42-1.7-9.52a5.52,5.52,0,0,1,2.63-5.85l22.78-12.65a10.35,10.35,0,0,0,5-12.83l-3.95-10.9a10.32,10.32,0,0,0-12.13-6.51l-25.55,5a5.51,5.51,0,0,1-5.82-2.81c-1.49-2.79-3.11-5.63-4.8-8.42a5.6,5.6,0,0,1,.44-6.5l17-19.64a10.42,10.42,0,0,0,.39-13.76l-7.42-8.91a10.24,10.24,0,0,0-13.58-2l-22.37,13.43a5.39,5.39,0,0,1-6.39-.63c-2.47-2.17-5-4.26-7.37-6.19a5.45,5.45,0,0,1-1.72-6.21l9.26-24.4a10.35,10.35,0,0,0-4.31-13.07L354.8,72.91a10.3,10.3,0,0,0-13.45,2.83L325,96.28A4.6,4.6,0,0,1,319.4,98c-.61-.25-5.77-2.36-9.78-3.7a5.42,5.42,0,0,1-3.74-5.23L306.27,63a10.48,10.48,0,0,0-8.57-10.88l-11.45-2a10.45,10.45,0,0,0-11.75,7.17L266,82.1a5.46,5.46,0,0,1-5.36,3.65h-9.75a5.5,5.5,0,0,1-5.3-3.67l-8.46-24.67a10.46,10.46,0,0,0-11.77-7.25l-11.47,2a10.46,10.46,0,0,0-8.56,10.79l.4,26.16a5.45,5.45,0,0,1-3.86,5.25c-2.29.89-7.26,2.79-9.52,3.63-2,.72-4.18-.07-5.94-2.1l-16.26-20A10.3,10.3,0,0,0,156.69,73l-10.06,5.83A10.36,10.36,0,0,0,142.31,92l9.25,24.34a5.54,5.54,0,0,1-1.7,6.23c-2.43,2-4.92,4-7.4,6.22a5.38,5.38,0,0,1-6.35.64L114,115.74a10.4,10.4,0,0,0-13.61,2L93,126.63a10.31,10.31,0,0,0,.37,13.75L110.45,160a5.42,5.42,0,0,1,.45,6.45c-1.71,2.72-3.34,5.58-4.82,8.44a5.53,5.53,0,0,1-5.86,2.82l-25.51-4.93a10.34,10.34,0,0,0-12.14,6.51l-4,10.88a10.38,10.38,0,0,0,5,12.85l22.78,12.65A5.39,5.39,0,0,1,89,221.59l-.24,1.27c-.52,2.79-1,5.43-1.46,8.24a5.48,5.48,0,0,1-4.46,4.64l-25.69,4.15A10.42,10.42,0,0,0,48,250.16v11.58A10.26,10.26,0,0,0,57.16,272l25.68,4.14a5.41,5.41,0,0,1,4.5,4.67c.49,3.16,1,6.42,1.7,9.52a5.52,5.52,0,0,1-2.63,5.85L63.64,308.85a10.35,10.35,0,0,0-5,12.83l4,10.9a10.33,10.33,0,0,0,12.13,6.51l25.55-4.95a5.49,5.49,0,0,1,5.82,2.81c1.5,2.8,3.11,5.63,4.8,8.42a5.58,5.58,0,0,1-.44,6.5l-17,19.63A10.41,10.41,0,0,0,93,385.27l7.41,8.91a10.23,10.23,0,0,0,13.58,2l22.37-13.43a5.39,5.39,0,0,1,6.39.63c2.48,2.17,5,4.26,7.37,6.19a5.47,5.47,0,0,1,1.73,6.21l-9.27,24.4a10.35,10.35,0,0,0,4.31,13.07L157,439.09a10.3,10.3,0,0,0,13.45-2.82L187,415.92c1.4-1.73,3.6-2.5,5.23-1.84,3.48,1.44,5.81,2.25,9.94,3.63a5.44,5.44,0,0,1,3.75,5.23l-.4,26.05a10.5,10.5,0,0,0,8.57,10.88l11.45,2a10.43,10.43,0,0,0,11.75-7.17l8.5-24.77a5.45,5.45,0,0,1,5.36-3.65h9.75a5.49,5.49,0,0,1,5.3,3.67l8.47,24.67a10.48,10.48,0,0,0,10,7.41,9.74,9.74,0,0,0,1.78-.16l11.47-2a10.46,10.46,0,0,0,8.56-10.79l-.4-26.16a5.43,5.43,0,0,1,3.75-5.2c3.84-1.29,6.54-2.33,8.91-3.25l.6-.23c3.1-1.07,4.6.23,5.47,1.31l16.75,20.63A10.3,10.3,0,0,0,355,439l10.07-5.83a10.35,10.35,0,0,0,4.31-13.1l-9.24-24.34a5.52,5.52,0,0,1,1.69-6.23c2.43-2,4.92-4,7.4-6.22a5.39,5.39,0,0,1,6.38-.62L398,396.06a10.39,10.39,0,0,0,13.61-2l7.4-8.9a10.31,10.31,0,0,0-.37-13.75l-17.06-19.67a5.42,5.42,0,0,1-.45-6.45c1.71-2.71,3.34-5.57,4.82-8.44a5.55,5.55,0,0,1,5.86-2.82L437.29,339a10.34,10.34,0,0,0,12.14-6.51l3.95-10.88a10.37,10.37,0,0,0-5-12.84L425.58,296.1a5.4,5.4,0,0,1-2.61-5.89l.24-1.27c.52-2.79,1-5.43,1.46-8.24a5.48,5.48,0,0,1,4.46-4.64l25.69-4.14A10.43,10.43,0,0,0,464,261.64V249.93Zm-282.45,94a15.8,15.8,0,0,1-25.47,2.66,135.06,135.06,0,0,1,.42-181.65A15.81,15.81,0,0,1,182,167.71l45.65,80.35a15.85,15.85,0,0,1,0,15.74ZM256,391.11a134.75,134.75,0,0,1-28.31-3,15.81,15.81,0,0,1-10.23-23.36l46-80a15.79,15.79,0,0,1,13.7-7.93h92.14a15.8,15.8,0,0,1,15.1,20.53C366.91,351.67,316,391.11,256,391.11Zm7.51-163.9L218,147.07a15.81,15.81,0,0,1,10.31-23.3A134,134,0,0,1,256,120.89c60,0,110.91,39.44,128.37,93.79a15.8,15.8,0,0,1-15.1,20.53h-92A15.78,15.78,0,0,1,263.51,227.21Z" />
    </svg>
  );
});
