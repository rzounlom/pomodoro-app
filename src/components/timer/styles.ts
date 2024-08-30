import classNames from "classnames";

export const timerContainer = classNames(
  "flex justify-center w-full h-3/5 lg:w-2/4"
);

export const timerOuter = classNames(
  "relative h-[300px] w-[300px] md:h-[410px] md:w-[410px] flex justify-center items-center timer-bg rounded-full p-[20px]"
);

export const timerInner = classNames(
  "absolute inset-0 flex flex-col justify-center items-center text-[80px] md:text-[100px] font-bold tracking-[-4px] md:tracking-[-5px]"
);

export const timerBtn = classNames(
  "text-[14px] md:text-[16px] tracking-[13.125px] md:tracking-[15px]"
);
