import { FC, useState } from "react";

import SettingsModal from "./SettingsModal";
import { settingsContainer } from "./styles";
import settingsIcon from "../../assets/icon-settings.svg";

const Settings: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={settingsContainer}>
      <SettingsModal open={open} setOpen={setOpen} />
      <div className="w-[28px] h-[28px] mr-[10px] md:mr-[10px]">
        <img onClick={() => setOpen(true)} src={settingsIcon} />
      </div>
    </div>
  );
};

export default Settings;
