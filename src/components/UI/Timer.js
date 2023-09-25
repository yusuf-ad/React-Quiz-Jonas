import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  function formatNumberToAABB(number) {
    const mins = Math.floor(number / 60);
    const seconds = number % 60;

    return `${String(mins).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  }

  useEffect(() => {
    const intervalId = setInterval(function () {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  return <div className="timer">{formatNumberToAABB(secondsRemaining)}</div>;
}

export default Timer;
