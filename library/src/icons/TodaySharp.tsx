import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const TodaySharp = component$<IoniconProps>((props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M32,456a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V176H32Zm80-238.86a9.14,9.14,0,0,1,9.14-9.14H230.86a9.14,9.14,0,0,1,9.14,9.14V326.86a9.14,9.14,0,0,1-9.14,9.14H121.14a9.14,9.14,0,0,1-9.14-9.14Z" />
      <path d="M456,64H400.08V32h-48V64H159.92V32h-48V64H56A23.8,23.8,0,0,0,32,87.77V144H480V87.77A23.8,23.8,0,0,0,456,64Z" />
    </svg>
  );
});
