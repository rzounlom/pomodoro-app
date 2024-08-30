import { SessionProps } from "./Session";
import classNames from "classnames";

export const sessionContainer = classNames(
  "flex justify-around items-center w-[327px] md:w-[373px] h-[63px] rounded-[31.5px] bg-deep-navy md:text-[14px] p-2 text-pale-blue font-bold"
);

export const sessionPill = ({ color, active }: SessionProps) => {
  return classNames(
    "flex justify-center items-center w-[35%] h-[48px] rounded-[26.5px] md:cursor-pointer",
    {
      "text-deep-navy": active,
      "bg-coral-red": active && color === "red",
      "bg-lavender-blush": active && color === "lavender",
      "bg-aqua-sky": active && color === "aqua",
    }
  );
};
