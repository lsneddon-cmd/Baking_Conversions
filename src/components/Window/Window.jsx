import React, { useState } from "react";
import Ingredients from "../Windows/Ingredients.jsx";
import Unit from "../Windows/Unit";
import Toggle from "../Windows/Toggle";
import Value from "../Windows/Value";
import Output from "../Windows/Output";

const Window = () => {
  const [currentWindow, setWindow] = useState("Output");
  const [ingredient, setIngredient] = useState("unselected");
  const [unit, setUnit] = useState("unselected");
  const [conversionSystem, setConversionSystem] = useState("unselected");
  const [amount, setAmount] = useState(0);

  switch (currentWindow) {
    case "Ingredients":
      return <Ingredients ing={ingredient} handleClick={setIngredient} />;
    case "Unit":
      return <Unit unit={unit} handleClick={setUnit} />;
    case "Toggle":
      return <Toggle conv={conversionSystem} handleClick={setConversionSystem} />;
    case "Value":
      return <Value amount={amount} handleClick={setAmount} />;
    case "Output":
      return <Output handleClick={setWindow} />;
    default:
      return <Ingredients />;
  }
};

export default Window;
