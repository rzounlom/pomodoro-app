import { ColorType, FontType, SettingsType } from "../../types";
import { FC, useState } from "react";

import SettingsModal from "./SettingsModal";
import { settingsContainer } from "./styles";
import settingsIcon from "../../assets/icon-settings.svg";

interface SettingsProps {
  settings: SettingsType;
  setSettings: (settings: SettingsType) => void;
  setColor: (color: ColorType) => void;
  setFontType: (fontType: FontType) => void;
  color: ColorType;
  fontType: FontType;
}

const Settings: FC<SettingsProps> = ({
  settings,
  setSettings,
  setColor,
  setFontType,
  color,
  fontType,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={settingsContainer}>
      <SettingsModal
        open={open}
        setOpen={setOpen}
        settings={settings}
        setSettings={setSettings}
        setColor={setColor}
        setFontType={setFontType}
        color={color}
        fontType={fontType}
      />
      <img onClick={() => setOpen(true)} src={settingsIcon} />
    </div>
  );
};

export default Settings;
