import React, { useState } from "react";
import Ingredients from "../Windows/Ingredients.jsx";
import Unit from "../Windows/Unit";
import Toggle from "../Windows/Toggle";
import Value from "../Windows/Value";
import Output from "../Windows/Output";

const Window = () => {
  const [currentWindow, setWindow] = useState("Ingredients");
  const [ingredient, setIngredient] = useState("unselected");
  const [unit, setUnit] = useState("unselected");
  const [conversionSystem, setConversionSystem] = useState("unselected");
  const [amount, setAmount] = useState(0);
  const [ calculation, setCalculation ] = useState(0);

  const reset = () => {
    setWindow("Ingredients");
    setIngredient("unselected");
    setUnit("unselected");
    setConversionSystem("unselected");
    setAmount(0);
  }

  switch (currentWindow) {
    case "Ingredients":
      return <Ingredients ing={ingredient} handleClick={setIngredient} updateWindow={setWindow} />;
    case "Unit":
      return <Unit unit={unit} handleClick={setUnit} updateWindow={setWindow} />;
    case "Toggle":
      return <Toggle conv={conversionSystem} handleClick={setConversionSystem} updateWindow={setWindow} />;
    case "Value":
      return <Value amount={amount} handleClick={setAmount} updateWindow={setWindow} />;
    case "Output":
      return (
         <Output 
          calculatedValue={calculation} 
          ing={ingredient}
          unit={unit}
          sys={conversionSystem}
          amount={amount}
          onCalculate={setCalculation} 
          handleClick={reset} 
        />
      );
    default:
      return <Ingredients />;
  }
};

export default Window;
