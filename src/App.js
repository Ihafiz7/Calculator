import { useState } from "react";
import * as math from 'mathjs';
import './style.css';

function App() {
  const [display, setDisplay] = useState("0");

  const handleNumber = (event) => {
    const number = event.target.textContent;

    if (display === "0") {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };
  
  const handleOperator = (event) => {
    const operator = event.target.textContent;

    const lastChar = display.slice(-1);
    if (
      !["+", "-", "*", "/"].includes(lastChar) ||
      (operator === "-" && lastChar !== "-")
    ) {
      setDisplay((prevDisplay) => prevDisplay + " " + operator + " ");
    } else if (operator !== "-") {
      setDisplay((prevDisplay) => prevDisplay.slice(0, -1) + operator + " ");
    }
  };

  const handleEqual = () => {
    try {
      const result = math.evaluate(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handleDecimal = () => {
    const array = display.split(" ");
    const lastElement = array[array.length - 1];

    if (!lastElement.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleClear = () => {
    setDisplay("0");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="row">
          {display}
        </div>
        <div id="clear" className="row" onClick={handleClear}>
          AC
        </div>
        <button id="seven" onClick={handleNumber}>
          7
        </button>
        <button id="eight" onClick={handleNumber}>
          8
        </button>
        <button id="nine" onClick={handleNumber}>
          9
        </button>
        <button id="multiply" onClick={handleOperator}>
          *
        </button>
        <button id="four" onClick={handleNumber}>
          4
        </button>
        <button id="five" onClick={handleNumber}>
          5
        </button>
        <button id="six" onClick={handleNumber}>
          6
        </button>
        <button id="divide" onClick={handleOperator}>
          /
        </button>
        <button id="one" onClick={handleNumber}>
          1
        </button>
        <button id="two" onClick={handleNumber}>
          2
        </button>
        <button id="three" onClick={handleNumber}>
          3
        </button>
        <button id="add" onClick={handleOperator}>
          +
        </button>
        <button id="zero" onClick={handleNumber}>
          0
        </button>
        <button id="subtract" onClick={handleOperator}>
          -
        </button>
        <button id="decimal" onClick={handleDecimal}>
        •
        </button>
        <button id="equals" onClick={handleEqual}>
          =
        </button>
        
      </div>
        
    </div>
  );
}

export default App;

