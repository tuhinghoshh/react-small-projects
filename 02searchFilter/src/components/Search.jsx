import React, { useState } from "react";
import { Data } from "./Data";

function Search() {
  const [store, setStore] = useState(Data);
  const [data, setData] = useState("");

  const getData = (e) => {
    //console.log(e.target.value)
    setData(e.target.value);
  };

  let filterOut = store.filter((curValue) => {
    return (
      curValue.name.toLocaleLowerCase().includes(data) ||
      curValue.brand.toLowerCase().includes(data)
    );
  });

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search Here.."
        onChange={getData}
        name=""
        id=""
      />
      <div className="type">
        <h3>Name</h3>
        <h3>Brand</h3>
        <h3>Images</h3>
      </div>
      {filterOut.map((cur) => {
        return (
          <div className="itemList">
            <p>{cur.name}</p>
            <p>{cur.brand}</p>
            <img src={cur.img} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Search;
