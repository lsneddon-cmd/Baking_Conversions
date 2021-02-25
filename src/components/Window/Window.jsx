import React, { useState } from "react";
import Ingredients from "../Windows/Ingredients.jsx";
import Unit from "../Windows/Unit";
import Toggle from "../Windows/Toggle";
import Value from "../Windows/Value";
import Output from "../Windows/Output";

const Window = () => {
  const [currentWindow, setWindow] = useState("Ingredients");
  const [ingredient, setIngredient] = useState("unselected");

  switch (currentWindow) {
    case "Ingredients":
      return <Ingredients ing={ingredient} handleClick={setIngredient} />;
    case "Unit":
      return <Unit />;
    case "Toggle":
      return <Toggle />;
    case "Value":
      return <Value />;
    case "Output":
      return <Output />;
    default:
      return <Ingredients />;
  }
};

export default Window;
