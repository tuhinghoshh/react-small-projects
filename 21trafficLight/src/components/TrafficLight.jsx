import React, { useState, useEffect } from "react";

function TrafficLight() {
  const [red, setRed] = useState(true);
  const [yellow, setYellow] = useState(false);
  const [green, setGreen] = useState(false);

  useEffect(() => {
    const lightColors = setInterval(() => {
      if (red && !yellow && !green) {
        setGreen(true);
        setRed(false);
      } else if (green && !red && !yellow) {
        setYellow(true);
        setGreen(false);
      } else if (yellow && !green && !red) {
        setRed(true);
        setYellow(false);
      }
    }, 2000);
    return () => {
      clearInterval(lightColors);
    };
  }, [red, yellow, green]);

  return (
    <div className="container">
      <p
        className="circle"
        style={{ backgroundColor: `${green ? "green" : "#f0efef"}` }}
      ></p>
      <p
        className="circle"
        style={{ backgroundColor: `${yellow ? "yellow" : "#f0efef"}` }}
      ></p>
      <p
        className="circle"
        style={{ backgroundColor: `${red ? "red" : "#f0efef"}` }}
      ></p>
    </div>
  );
}

export default TrafficLight;
