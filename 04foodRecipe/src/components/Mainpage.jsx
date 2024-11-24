import React, { useState } from "react";
import Mealcards from "./Mealcards";

function Mainpage() {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async () => {
    if (search == "") {
      setMsg("Please Enter Something");
    } else {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsonData = await get.json();
      setData(jsonData.meals);
      setMsg("");
    }
  };
  return (
    <>
      <h1 className="head">FOOD RECIPE APP</h1>
      <div className="container">
        <div className="searchBar">
          <input type="text" placeholder="Enter Dishe" onChange={handleInput} />
          <button onClick={handleSubmit}>Search</button>
        </div>
        <h4 className="msg">{msg}</h4>
        <div>
          <Mealcards detail={data} />
        </div>
      </div>
    </>
  );
}

export default Mainpage;
