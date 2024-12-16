import React, { useEffect, useState } from "react";
import circle from "../images/circle.png";

function CricketScore() {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState();
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const res = await fetch(
        `https://api.cricapi.com/v1/cricScore?apikey=0bcc46d2-2e40-4297-8f89-a46467f6db0b`
      );
      const data = await res.json();
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  const handleBtn = () => {
    setSearch(inputData);
    getData();
  };

  return (
    <div className="main-container">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search Match, series"
          onChange={handleInput}
        />
        <button onClick={handleBtn}>Search</button>
      </div>
      <div className="heading">
        <img src={circle} />
        <p>Live Cricket Score App</p>
      </div>

      <div className="container">
        {data ? (
          data.map((curVal) => {
            console.log(curVal);
            if (curVal.status != "Match not started") {
              if (
                curVal.series.includes(search) ||
                curVal.t1.includes(search) ||
                curVal.t2.includes(search)
              ) {
                return (
                  <div className="card">
                    <h3>{curVal.series}</h3>
                    <h3>{curVal.matchType}</h3>
                    <div className="img">
                      <div>
                        <img src={curVal.t1img} />
                        <p>{curVal.t1}</p>
                        <p>{curVal.t1s}</p>
                      </div>
                      <div>
                        <img src={curVal.t2img} />
                        <p>{curVal.t2}</p>
                        <p>{curVal.t2s}</p>
                      </div>
                    </div>
                    <p className="status">Status : {curVal.status}</p>
                  </div>
                );
              }

              if (search == "") {
                return (
                  <div className="card">
                    <h3>{curVal.series}</h3>
                    <h3>{curVal.matchType}</h3>
                    <div className="img">
                      <div>
                        <img src={curVal.t1img} />
                        <p>{curVal.t1}</p>
                        <p>{curVal.t1s}</p>
                      </div>
                      <div>
                        <img src={curVal.t2img} />
                        <p>{curVal.t2}</p>
                        <p>{curVal.t2s}</p>
                      </div>
                    </div>
                    <p className="status">Status : {curVal.status}</p>
                  </div>
                );
              }
            }
          })
        ) : (
          <p>Data Not Found!</p>
        )}
      </div>
    </div>
  );
}

export default CricketScore;
