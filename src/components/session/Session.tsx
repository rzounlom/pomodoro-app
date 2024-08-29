import { sessionContainer, sessionPill } from "./styles";

import { FC } from "react";
import { sessions } from "./data";

export interface SessionProps {
  session: "pomodoro" | "short" | "long";
  color: "red" | "aqua" | "lavender";
  active?: boolean;
  setSession?: (session: "pomodoro" | "short" | "long") => void;
}

const Session: FC<SessionProps> = ({ session, color, setSession }) => {
  console.log({ session, color });

  const handleClick = (s: "pomodoro" | "short" | "long") => {
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
            session: name as "pomodoro" | "short" | "long",
            active: session === name,
          })}
          onClick={() => handleClick(name as "pomodoro" | "short" | "long")}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default Session;
