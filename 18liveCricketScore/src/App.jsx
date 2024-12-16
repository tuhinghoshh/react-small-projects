import { useState } from "react";
import "./App.css";
import CricketScore from "./components/CricketScore";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CricketScore />
    </>
  );
}

export default App;
