import "react-circular-progressbar/dist/styles.css";
import "./Timer.css";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { FC, useEffect, useState } from "react";
import { timerBtn, timerContainer, timerInner, timerOuter } from "./styles";

import { useAppContext } from "../../hooks/useAppContext";

// Pomodoro Timer Component
const Timer: FC = () => {
  const { color, session, settings } = useAppContext();
  const initialTime = settings[session] * 60; // Convert to seconds
  const [secondsLeft, setSecondsLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [persistedTime, setPersistedTime] = useState(initialTime);
  const [pathColor, setPathColor] = useState("#F87070");

  // Calculate minutes and seconds for display
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  // Start and pause functionality
  const handleStartPause = () => {
    if (isPaused) {
      setIsPaused(false);
      setIsActive(true);
    } else {
      setIsActive(!isActive);
    }
  };

  // Reset functionality
  // const handleReset = () => {
  //   setIsActive(false);
  //   setIsPaused(false);
  //   setSecondsLeft(persistedTime);
  // };

  // Whenever the session changes, update the time state
  useEffect(() => {
    const initialSessionTime = settings[session] * 60; // Convert to seconds
    setSecondsLeft(initialSessionTime);
    setPersistedTime(initialSessionTime);
  }, [session, settings]);

  useEffect(() => {
    const handlePathColor = () => {
      switch (color) {
        case "aqua":
          return "#70F3F8";
        case "lavender":
          return "#D881F8";
        default:
          return "#F87070";
      }
    };

    setPathColor(handlePathColor());
  }, [color]);

  // Timer countdown logic
  useEffect(() => {
    let timer: number | undefined;
    if (isActive && !isPaused && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(timer);
  }, [isActive, isPaused, secondsLeft]);

  // Calculate percentage for circular progress bar
  const percentage = (secondsLeft / persistedTime) * 100;

  return (
    <div className={timerContainer}>
      <div className={timerOuter}>
        <CircularProgressbar
          value={percentage}
          strokeWidth={3.2}
          styles={buildStyles({
            strokeLinecap: "round",
            textSize: "16px",
            pathTransitionDuration: 0.5,
            pathColor: pathColor,
            trailColor: "transparent",
            backgroundColor: "#1E213F",
          })}
        />
        <div className={timerInner}>
          {`${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`}
          <button onClick={handleStartPause} className={timerBtn}>
            {isActive ? "PAUSE" : "START"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
