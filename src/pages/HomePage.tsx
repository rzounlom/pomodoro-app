import { FC, useState } from "react";

import Heading from "../components/Heading";
import Session from "../components/session/Session";

const HomePage: FC = () => {
  const [session, setSession] = useState<"pomodoro" | "short" | "long">(
    "short"
  );

  return (
    <div className="flex flex-col items-center p-[24px]">
      <Heading />
      <Session session={session} color="aqua" setSession={setSession} />
    </div>
  );
};

export default HomePage;
