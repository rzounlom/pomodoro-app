import { ColorType, FontType, SessionType, SettingsType } from "../types";
import { FC, useState } from "react";

import Heading from "../components/Heading";
import Session from "../components/session/Session";
import Settings from "../components/settings/Settings";
import Timer from "../components/timer/Timer";

const HomePage: FC = () => {
  const [session, setSession] = useState<SessionType>("pomodoro");
  const [color, setColor] = useState<ColorType>("red");
  const [fontType, setFontType] = useState<FontType>("ks");
  const [settings, setSettings] = useState<SettingsType>({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });

  return (
    <div className="flex flex-col items-center justify-evenly h-screen p-[24px]">
      <Heading />
      <Session session={session} color={color} setSession={setSession} />
      <Timer color={color} session={session} settings={settings} />
      <Settings
        settings={settings}
        setSettings={setSettings}
        setColor={setColor}
        setFontType={setFontType}
        fontType={fontType}
        color={color}
      />
    </div>
  );
};

export default HomePage;
