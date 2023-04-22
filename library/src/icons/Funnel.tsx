import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const Funnel = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M296,464a23.88,23.88,0,0,1-7.55-1.23l-80.15-26.67A23.92,23.92,0,0,1,192,413.32V294.11a.44.44,0,0,0-.09-.13L23.26,97.54A30,30,0,0,1,46.05,48H466a30,30,0,0,1,22.79,49.54L320.09,294a.77.77,0,0,0-.09.13V440a23.93,23.93,0,0,1-24,24Z" />
    </svg>
  );
});