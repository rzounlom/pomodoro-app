import { ColorType, SessionType } from "../types";
import { FC, useState } from "react";

import Heading from "../components/Heading";
import Session from "../components/session/Session";
import Timer from "../components/timer/Timer";

const HomePage: FC = () => {
  const [session, setSession] = useState<SessionType>("short");

  const [color, setColor] = useState<ColorType>("red");

  return (
    <div className="flex flex-col items-center justify-evenly h-screen p-[24px]">
      <Heading />
      <Session session={session} color={color} setSession={setSession} />
      <Timer />
    </div>
  );
};

export default HomePage;
