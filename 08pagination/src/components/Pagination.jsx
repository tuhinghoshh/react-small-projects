import React, { useState, useEffect } from "react";

function Pagination() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const nextButtons = Array.from({ length: 4 }, (_, index) => pageNo + index);
  const preButtons = Array.from({ length: 3 }, (_, index) => pageNo - 1 - index)
    .filter((value) => value > 0)
    .reverse();
  const mergeArr = [...preButtons, ...nextButtons];

  const getData = async () => {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${pageNo}&limit=5`
    );
    const jsonData = await response.json();
    setData(jsonData);
  };
  useEffect(() => {
    getData();
  }, [pageNo]);

  const handlePrev = () => {
    setPageNo(pageNo - 1);
  };
  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  return (
    <div>
      <div className="image-container">
        {data.map((curItem, index) => {
          return <img key={index} src={curItem.download_url} alt="image" />;
        })}
      </div>
      <div className="buttons">
        {pageNo > 1 ? (
          <button onClick={handlePrev} className="preBtn">
            Previous
          </button>
        ) : (
          ""
        )}
        {mergeArr.map((curValue) => {
          return (
            <button
              onClick={() => setPageNo(curValue)}
              className={curValue == pageNo ? "active" : ""}
            >
              {curValue}
            </button>
          );
        })}
        <button onClick={handleNext} className="nextBtn">
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
