import { sessionContainer, sessionPill } from "./styles";

import { FC } from "react";
import { SessionType } from "../../types";
import { sessions } from "./data";
import { useAppContext } from "../../hooks/useAppContext";

const Session: FC = () => {
  const { session, setSession, color } = useAppContext();

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
