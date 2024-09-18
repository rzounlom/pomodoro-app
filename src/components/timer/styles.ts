import { FontType } from "../../types";
import classNames from "classnames";

export const timerContainer = classNames(
  "flex justify-center w-full h-2/4 lg:w-2/4"
);

export const timerOuter = classNames(
  "relative h-[300px] w-[300px] md:h-[410px] md:w-[410px] flex justify-center items-center timer-bg rounded-full p-[20px]"
);

export const timerInner = ({ font }: { font: FontType }) =>
  classNames(
    "absolute inset-0  flex flex-col justify-center items-center text-[80px] md:text-[100px] font-bold tracking-[-4px] md:tracking-[-5px]",
    {
      "font-kumbh-sans": font === "ks",
      "font-roboto-slab": font === "rs",
      "font-space-mono": font === "sm",
    }
  );

export const timerBtn = classNames(
  "text-[14px] md:text-[16px] tracking-[13.125px] md:tracking-[15px] ml-[18px]"
);
