import { ColorType, FontType, SessionType, SettingsType } from "../types";
// src/context/AppContext.tsx
import { FC, ReactNode, createContext, useState } from "react";

// Define the shape of your context state
interface AppContextType {
  session: SessionType;
  setSession: (session: SessionType) => void;
  color: ColorType;
  setColor: (color: ColorType) => void;
  font: FontType;
  setFont: (fontType: FontType) => void;
  settings: SettingsType;
  setSettings: (settings: SettingsType) => void;
}

// Create the context with default values
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<SessionType>("pomodoro");
  const [color, setColor] = useState<ColorType>("red");
  const [font, setFont] = useState<FontType>("ks");
  const [settings, setSettings] = useState<SettingsType>({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });

  return (
    <AppContext.Provider
      value={{
        session,
        setSession,
        color,
        setColor,
        font,
        setFont,
        settings,
        setSettings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
