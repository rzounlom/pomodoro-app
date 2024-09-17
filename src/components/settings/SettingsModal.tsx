import { ColorType, FontType } from "../../types";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { FC, useState } from "react";
import { arrowDown, arrowUp, closeIcon } from "../../assets";

import { checkIcon } from "../../assets";
import { settingsModalFont } from "./styles";
import { useAppContext } from "../../hooks/useAppContext";

interface SettingsModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SettingsModal: FC<SettingsModalProps> = ({ open, setOpen }) => {
  const { settings, setSettings, setColor, color, font } = useAppContext();
  const [defaultSettings, setDefaultSettings] = useState(settings);
  const [defaultColor, setDefaultColor] = useState<ColorType>(color);
  const [defaultFont, setDefaultFont] = useState<FontType>(font);

  const handleSettingsChange = (
    type: "up" | "down",
    setting: "pomodoro" | "shortBreak" | "longBreak"
  ) => {
    if (type === "up") {
      setDefaultSettings({
        ...defaultSettings,
        [setting]: defaultSettings[setting] + 1,
      });
    } else {
      setDefaultSettings({
        ...defaultSettings,
        [setting]: defaultSettings[setting] - 1,
      });
    }
  };

  const handleClose = () => {
    setDefaultSettings(settings);
    setDefaultColor(color);
    setDefaultFont(font);
    setOpen(false);
  };

  const handleApplySettings = () => {
    setSettings(defaultSettings);
    setColor(defaultColor);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-modal-bg bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10">
        <div className="flex h-screen w-screen items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="w-[100%] h-[100%] pr-[24px] pl-[24px] max-w-[327px] max-h-[550px] flex flex-col items-center relative transform rounded-lg bg-white shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 text-midnight-purple"
          >
            <div className="w-full h-[10%] flex justify-between items-center text-[20px] border-b border-faded-blue">
              Settings
              <img
                className="hover:cursor-pointer"
                src={closeIcon}
                alt="close"
                onClick={() => setOpen(false)}
              />
            </div>
            <div className="flex flex-col border-b pt-[24px] pb-[24px]border-faded-blue w-full h-[40%]">
              <p className="text-[11px] tracking-[4.23px]">TIME (MINUTES)</p>
              <div className="w-full h-[40px] flex justify-between items-center mt-[8px] first-of-type:mt-[18px]">
                <p className="text-[12px] opacity-[0.4]">pomodoro</p>
                <div className="h-full flex justify-around items-center w-[140px] text-[14px] bg-soft-white border rounded-md">
                  <div>{defaultSettings.pomodoro}</div>
                  <div className="h-full flex flex-col justify-around">
                    <img
                      src={arrowUp}
                      alt="arrow up"
                      className="hover:cursor-pointer"
                      onClick={() => handleSettingsChange("up", "pomodoro")}
                    />
                    <img
                      src={arrowDown}
                      alt="arrow down"
                      className="hover:cursor-pointer"
                      onClick={() => handleSettingsChange("down", "pomodoro")}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-[40px] flex justify-between items-center mt-[8px] first-of-type:mt-[18px]">
                <p className="text-[12px] opacity-[0.4]">short break</p>
                <div className="h-full flex justify-around items-center w-[140px] text-[14px] bg-soft-white border rounded-md">
                  <div>{defaultSettings.shortBreak}</div>
                  <div className="h-full flex flex-col justify-around">
                    <img
                      src={arrowUp}
                      alt="arrow up"
                      className="hover:cursor-pointer"
                      onClick={() => handleSettingsChange("up", "shortBreak")}
                    />
                    <img
                      src={arrowDown}
                      alt="arrow down"
                      className="hover:cursor-pointer"
                      onClick={() => handleSettingsChange("down", "shortBreak")}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-[40px] flex justify-between items-center mt-[8px] first-of-type:mt-[18px]">
                <p className="text-[12px] opacity-[0.4]">long break</p>
                <div className="h-full flex justify-around items-center w-[140px] text-[14px] bg-soft-white border rounded-md">
                  <div>{defaultSettings.longBreak}</div>
                  <div className="h-full flex flex-col justify-around">
                    <img
                      src={arrowUp}
                      alt="arrow up"
                      className="hover:cursor-pointer"
                      onClick={() => handleSettingsChange("up", "longBreak")}
                    />
                    <img
                      src={arrowDown}
                      alt="arrow down"
                      className="hover:cursor-pointer"
                      onClick={() => handleSettingsChange("down", "longBreak")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b w-full h-[22.5%] flex flex-col items-center justify-around py-[24px]">
              <p className="text-[11px] tracking-[4.23px]">FONT</p>
              <div className="h-[40px] w-[152px] flex justify-between items-center">
                <button
                  className={settingsModalFont({
                    isActive: defaultFont === "ks",
                  })}
                  onClick={() => setDefaultFont("ks")}
                >
                  Aa
                </button>
                <button
                  className={settingsModalFont({
                    isActive: defaultFont === "rs",
                  })}
                  onClick={() => setDefaultFont("rs")}
                >
                  Aa
                </button>
                <button
                  className={settingsModalFont({
                    isActive: defaultFont === "sm",
                  })}
                  onClick={() => setDefaultFont("sm")}
                >
                  Aa
                </button>
              </div>
            </div>
            <div className="w-full h-[22.5%] flex flex-col items-center justify-around py-[24px]">
              <p className="text-[11px] tracking-[4.23px]">COLOR</p>
              <div className="h-[40px] w-[152px] flex justify-between items-center">
                <button
                  className="h-[40px] w-[40px] flex justify-center items-center rounded-full bg-coral-red border"
                  onClick={() => setDefaultColor("red")}
                >
                  {defaultColor === "red" && (
                    <img src={checkIcon} alt="check icon" />
                  )}
                </button>
                <button
                  className="h-[40px] w-[40px] flex justify-center items-center rounded-full bg-aqua-sky border"
                  onClick={() => setDefaultColor("aqua")}
                >
                  {defaultColor === "aqua" && (
                    <img src={checkIcon} alt="check icon" />
                  )}
                </button>{" "}
                <button
                  className="h-[40px] w-[40px] flex justify-center items-center rounded-full bg-lavender-blush border"
                  onClick={() => setDefaultColor("lavender")}
                >
                  {defaultColor === "lavender" && (
                    <img src={checkIcon} alt="check icon" />
                  )}
                </button>
              </div>
            </div>
            <button
              className="absolute bottom-[-25px]  w-[140px] h-[53px] bg-coral-red rounded-[26.5px]"
              onClick={handleApplySettings}
            >
              Apply
            </button>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default SettingsModal;
