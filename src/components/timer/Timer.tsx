import "react-circular-progressbar/dist/styles.css";
import "./Timer.css";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// export default Timer;
import { FC, useEffect, useState } from "react";
import { timerBtn, timerContainer, timerInner, timerOuter } from "./styles";

// Pomodoro Timer Component
const Timer = () => {
  const [secondsLeft, setSecondsLeft] = useState(60 * 25); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

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
  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setSecondsLeft(60 * 25);
  };

  // Timer countdown logic
  useEffect(() => {
    let timer: number;
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
  const percentage = (secondsLeft / (25 * 60)) * 100;

  return (
    <div className={timerContainer}>
      <div className={timerOuter}>
        <CircularProgressbar
          value={percentage}
          strokeWidth={3.5}
          styles={buildStyles({
            strokeLinecap: "round",
            textSize: "16px",
            pathTransitionDuration: 0.5,
            pathColor: "#F87070",
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
