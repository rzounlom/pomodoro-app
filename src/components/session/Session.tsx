import { ColorType, SessionType } from "../../types";
import { sessionContainer, sessionPill } from "./styles";

import { FC } from "react";
import { sessions } from "./data";

export interface SessionProps {
  session: SessionType;
  color: ColorType;
  active?: boolean;
  setSession?: (session: SessionType) => void;
}

const Session: FC<SessionProps> = ({ session, color, setSession }) => {
  console.log({ session, color });

  const handleClick = (s: "pomodoro" | "shortBreak" | "longBreak") => {
    if (setSession) {
      setSession(s);
    }
  };

  return (
    <div className={sessionContainer}>
      {sessions.map(({ name, label }) => (
        <div
          key={name}
          className={sessionPill({
            color,
            session,
            active: session === name,
          })}
          onClick={() => handleClick(name as SessionType)}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default Session;
