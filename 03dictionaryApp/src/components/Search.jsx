import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState();
  const [data, setData] = useState();

  const handelInput = (e) => {
    setSearch(e.target.value);
  };

  const handelSubmit = async () => {
    try {
      const get = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
      );
      const jsonData = await get.json();
      setData(jsonData[0]);
    } catch (error) {
      alert(err);
    }
  };
  return (
    <>
      <div className="app">
        <h1>Dictionary App</h1>
        <div className="container">
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search Word's"
              onChange={handelInput}
            />
            <button type="submit" onClick={handelSubmit}>
              Search
            </button>
          </div>
          <div className="datas">
            {data ? (
              <div className="datas">
                <h2>Word : {data.word}</h2>
                <p>Part Of Speech : {data.meanings[0].partOfSpeech}</p>
                <p>Definition : {data.meanings[0].definitions[0].definition}</p>
                <p>Synoyms : {data.meanings[0].synonyms[0]}</p>
                <p>Example : {data.meanings[0].definitions[0].example}</p>
                <button
                  onClick={() => window.open(data.sourceUrls[0], "_blank")}
                >
                  Read more
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
