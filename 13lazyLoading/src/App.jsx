import React, { Suspense } from "react";
import "./App.css";
// import Data from "./Data";

const Data = React.lazy(() => import("./Data"));

function App() {
  return (
    <>
      <h1>Lazy Loading</h1>
      <Suspense fallback="Please Wait Data Loading...">
        <Data />
      </Suspense>
    </>
  );
}

export default App;
