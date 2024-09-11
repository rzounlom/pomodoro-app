import { AppProvider } from "../context/AppContext";
import { FC } from "react";
import Heading from "../components/Heading";
import Session from "../components/session/Session";
import Settings from "../components/settings/Settings";
import Timer from "../components/timer/Timer";

const HomePage: FC = () => {
  return (
    <AppProvider>
      <div className="flex flex-col items-center justify-evenly h-screen p-[24px]">
        <Heading />
        <Session />
        <Timer />
        <Settings />
      </div>
    </AppProvider>
  );
};

export default HomePage;
