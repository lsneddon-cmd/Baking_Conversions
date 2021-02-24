import React from 'react';
import Ingredients from '../Windows/Ingredients.jsx';
import Unit from '../Windows/Unit';
import Toggle from '../Windows/Toggle';
import Value from '../Windows/Value';
import Calculate from '../Windows/Calculate';
import Output from '../Windows/Output';

const Window = () => {

  const windowToRender = "Ingredients";

  switch (windowToRender) {
    case "Ingredients":
      return <Ingredients />
    case "Unit":
      return <Unit />
    case "Toggle":
      return <Toggle />
    case "Value":
      return <Value />
    case "Calculate":
      return <Calculate />
    case "Output":
      return <Output />
    default:
      return <Ingredients />
  }
}

export default Window;