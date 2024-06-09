import React, { useState } from "react";
import "./App.css";

export default function App() {
  return <Calculator />;
}

function Calculator() {
  const [inputValue, setInputValue] = useState(""); // State to hold the input value

  const handleButtonClick = (value) => {
    setInputValue((prevValue) => prevValue + value); // Concatenate the clicked value to the input value
  };

  return (
    <div className="container">
      <Screen value={inputValue} />
      <Buttons onButtonClick={handleButtonClick} />
    </div>
  );
}

function Screen({ value }) {
  return (
    <div className="screen">
      <div className="result"></div>
      <input type="text" value={value} readOnly /> {/* Display the input value */}
      <div className="input-accept"></div>
    </div>
  );
}

function Buttons({ onButtonClick }) {
  const rows = [
    ["C", "()", "%", "/"],
    [7, 9, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    ["00", "0", ".", "="],
  ];

  return (
    <div className="buttons">
      {rows.map((row, index) => (
        <div key={index} className={`row row${index + 1}`}>
          {row.map((value, index) => (
            <Button key={index} value={value} onButtonClick={onButtonClick} />
          ))}
        </div>
      ))}
    </div>
  );
}

function Button({ value, onButtonClick }) {
  return (
    <>
      <button onClick={() => onButtonClick(value)}>{value}</button> {/* Pass the value to the click handler */}
    </>
  );
}
