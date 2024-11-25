import React, { useState } from "react";

function Todos() {
  const [initial, setInitial] = useState();
  const [data, setData] = useState([]);

  const getInput = (e) => {
    setInitial(e.target.value);
  };
  const getData = () => {
    let store = [...data, initial];
    setData(store);
    setInitial("");
  };
  const deleteTask = (index) => {
    let filterData = data.filter((curItem, id) => {
      return id != index;
    });
    setData(filterData);
  };

  return (
    <>
      <h1 className="head">Todo Operation</h1>
      <div className="container">
        <div className="inputTask">
          <input
            type="text"
            placeholder="Enter Your Task"
            value={initial}
            onChange={getInput}
          />
          <button onClick={getData}>Add</button>
        </div>
        {data.map((curVal, index) => {
          return (
            <>
              <div className="taskData">
                <p>{curVal}</p>
                <i
                  id="deleteIcon"
                  onClick={() => deleteTask(index)}
                  class="fa-solid fa-trash"
                ></i>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Todos;
