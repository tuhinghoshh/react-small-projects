import React, { useState } from "react";
import sun from "../images/sunny.png";
import cloud from "../images/cloud.png";
import morning from "../images/morning.png";
import moon from "../images/moon.png";

function Greeting() {
  let date = new Date();
  let curretTime = date.toLocaleTimeString();
  const [time, setTime] = useState(curretTime);

  setInterval(() => {
    let date = new Date();
    let curretTime = date.toLocaleTimeString();
    setTime(curretTime);
  }, 1000);

  let hour = date.getHours();
  let msg;
  let image;

  if (hour >= 5 && hour < 12) {
    msg = "GOOD MORNING";
    image = morning;
  } else if (hour >= 12 && hour < 18) {
    msg = "GOOD AFternoon";
    image = sun;
  } else if (hour >= 18 && hour < 22) {
    msg = "GOOD Evening";
    image = cloud;
  } else if (hour > 22) {
    msg = "GOOD NIGHT";
    image = moon;
  } else if (hour < 5) {
    msg = "GOOD NIGHT";
    image = moon;
  }

  return (
    <>
      <div className="container">
        <h2>Greeting Website</h2>
        <h1>{time}</h1>
        <p>{msg}</p>
        <img src={image} alt="img" />
      </div>
    </>
  );
}

export default Greeting;
