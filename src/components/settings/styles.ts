import classNames from "classnames";

export const settingsContainer = classNames(
  "h-[30px] w-full lg:w-2/4 flex justify-center items-center hover:cursor-pointer"
);

export const settingsModalContainer = classNames(
  "h-[30px] w-full lg:w-2/4 text-center flex justify-center items-center hover:cursor-pointer"
);

export const settingsModalFont = ({ isActive }: { isActive: boolean }) =>
  classNames(
    "h-[40px] w-[40px] flex justify-center items-center rounded-full border font-space-mono font-bold",
    {
      "bg-soft-white": !isActive,
      "bg-midnight-blue text-white": isActive,
    }
  );
