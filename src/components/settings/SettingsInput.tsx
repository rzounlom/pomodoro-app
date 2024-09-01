import { FC, useState } from "react";
import { arrowDown, arrowUp } from "../../assets";

interface SettingsInputProps {
  defaultTime: number;
  setting: "pomodoro" | "shortBreak" | "longBreak";
  setDefaultSettings: (settings: {
    pomodoro: number;
    shorBreak: number;
    longBreak: number;
  }) => void;
}

const SettingsInput: FC<SettingsInputProps> = ({ defaultTime }) => {
  const [time, setTime] = useState(defaultTime);

  const handleTimeChange = (type: "up" | "down") => {
    if (type === "up") {
      setTime(time + 1);
    } else {
      setTime(time - 1);
    }
  };

  return (
    <div className="w-full h-[40px] flex justify-between items-center mt-[8px] first-of-type:mt-[18px]">
      <p className="text-[12px] opacity-[0.4]">pomodoro</p>
      <div className="h-full flex justify-around items-center w-[140px] text-[14px] bg-soft-white border rounded-md">
        <div>{time}</div>
        <div className="h-full flex flex-col justify-around">
          <img
            src={arrowUp}
            alt="arrow up"
            className="hover:cursor-pointer"
            onClick={() => handleTimeChange("up")}
          />
          <img
            src={arrowDown}
            alt="arrow down"
            className="hover:cursor-pointer"
            onClick={() => handleTimeChange("down")}
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsInput;
