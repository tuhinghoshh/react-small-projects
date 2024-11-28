import React, { useEffect, useRef, useState } from "react";

function Otp() {
  const [inputs, setInputs] = useState(new Array(4).fill(""));
  const [inputArr, setInputArr] = useState(inputs);
  const [msg, setMsg] = useState(false);

  const refs = [useRef(), useRef(), useRef(), useRef()];

  const handleInput = (e, index) => {
    const val = e.target.value;

    if (!Number(val)) return;

    const copyArray = [...inputArr];
    copyArray[index] = val;
    setInputArr(copyArray);

    if (index < inputArr.length - 1) {
      refs[index + 1].current.focus();
    }
  };

  const handleKey = (e, index) => {
    console.log(e.keyCode);
    if (e.keyCode == 8) {
      const copyArray = [...inputArr];
      copyArray[index] = "";
      setInputArr(copyArray);

      if (index > 0) {
        refs[index - 1].current.focus();
      }
    }
    if (index < inputArr.length - 1) {
      if (e.keyCode == 39) {
        refs[index + 1].current.focus();
      }
    }
    if (index > 0) {
      if (e.keyCode == 37) {
        refs[index - 1].current.focus();
      }
    }
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text");

    const dataArray = data.split("");
    setInputArr(dataArray);

    refs[inputArr.length - 1].current.focus();
  };

  const handleSubmit = () => {
    inputArr.map((curvalue, index) => {
      if (curvalue == "") {
        setMsg(false);
      } else {
        setMsg(true);
      }
    });
  };

  useEffect(() => {
    refs[0].current.focus();
  }, []);

  return (
    <div className="container">
      <h1>OTP Fields</h1>
      <h3>{msg ? "Verified!" : "Plese Fill All Inputs"}</h3>
      {inputs.map((curValue, index) => {
        return (
          <input
            maxLength="1"
            ref={refs[index]}
            value={inputArr[index]}
            key={index}
            type="text"
            onPaste={handlePaste}
            onKeyDown={(e) => handleKey(e, index)}
            onChange={(e) => handleInput(e, index)}
          />
        );
      })}

      <br />
      <button onClick={handleSubmit}>Verify OTP</button>
    </div>
  );
}

export default Otp;
