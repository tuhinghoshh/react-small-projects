import React, { useState } from "react";

function StopWatch() {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, milli: 0 });
  const [status, setStatus] = useState();

  let updateHr = time.hr;
  let updateMin = time.min;
  let updateSec = time.sec;
  let updateMilli = time.milli;

  const start = () => {
    timer();
    setStatus(setInterval(timer, 10));
  };
  const stop = () => {
    clearInterval(status);
  };
  const reset = () => {
    clearInterval(status);
    setTime({ hr: 0, min: 0, sec: 0, milli: 0 });
  };

  const timer = () => {
    if (updateMilli === 100) {
      updateMilli = 0;
      updateSec++;
    }
    if (updateSec === 60) {
      updateSec = 0;
      updateMin++;
    }
    if (updateMin === 60) {
      updateMin = 0;
      updateHr++;
    }
    updateMilli++;
    return setTime({
      hr: updateHr,
      min: updateMin,
      sec: updateSec,
      milli: updateMilli,
    });
  };

  return (
    <div className="container">
      <h1>
        {time.hr + " : " + time.min + " : " + time.sec + " : " + time.milli}
      </h1>
      <div className="buttons">
        <button className="start" onClick={start}>
          Start
        </button>
        <button className="stop" onClick={stop}>
          Stop
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
