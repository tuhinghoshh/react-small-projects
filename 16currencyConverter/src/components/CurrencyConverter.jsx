import React, { useEffect, useState } from "react";
//import { PulseLoader } from "react-spinners";

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState();
  const [result, setResult] = useState();
  //const [loader, setLoader] = useState(false);

  const getCurrencies = async () => {
    const res = await fetch(`https://api.frankfurter.dev/v1/currencies`);
    const data = await res.json();
    setCurrencies(Object.keys(data));
    //Object.keys(data) is a method that returns an array of the enumerable property names (keys) of the object data.
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  const handleFromCurrencies = (e) => {
    setFromCurrency(e.target.value);
  };
  const handleToCurrencies = (e) => {
    setToCurrency(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const convertCurrency = async () => {
    //setLoader(true)
    const res = await fetch(
      `https://api.frankfurter.dev/v1/latest?amount=${amount}&base=${fromCurrency}&symbols=${toCurrency}`
    );
    const data = await res.json();
    setResult(
      "Converted Amount : " + data.rates[toCurrency] + " " + toCurrency
    );
    //setLoader(false);
  };

  return (
    <div className="container">
      <p className="heading">Currency Convertor</p>
      <div className="select">
        <div>
          <p>From</p>
          <select value={fromCurrency} onChange={handleFromCurrencies}>
            {currencies.map((curVal, index) => {
              return <option value={curVal}>{curVal}</option>;
            })}
          </select>
        </div>
        <div>
          <p>To</p>
          <select value={toCurrency} onChange={handleToCurrencies}>
            {currencies.map((curVal, index) => {
              return <option value={curVal}>{curVal}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="amountContainer">
        <p>Amount</p>
        <input
          type="number"
          placeholder="Enter amount"
          onChange={handleAmount}
        />
      </div>

      <div className="convertBtn">
        <button onClick={convertCurrency}>Convert</button>
      </div>

      <div className="result">
        {/*loader ? (<PulseLoader loading={loader} color="blue" />) : (<p>{result}</p>)*/}
        <p>{result}</p>
      </div>
    </div>
  );
}

export default CurrencyConverter;
