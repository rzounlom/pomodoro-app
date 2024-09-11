import { FC, useState } from "react";

import SettingsModal from "./SettingsModal";
import { settingsContainer } from "./styles";
import settingsIcon from "../../assets/icon-settings.svg";
import { useAppContext } from "../../hooks/useAppContext";

const Settings: FC = () => {
  const { settings, setSettings, setColor, setFontType, color, fontType } =
    useAppContext();
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
