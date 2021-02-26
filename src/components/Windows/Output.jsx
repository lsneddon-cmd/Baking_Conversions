import React, { useEffect } from "react";

const Output = (props) => {
  useEffect(() => {
    props.onCalculate(performCalculation(props));
  });

  return (
    <div className="window-container">
      <p className="subheading">Converted!</p>
      <p>There are {props.calculatedValue.toFixed(2)} grams in {props.amount} {props.unit}  of {props.ing}</p>
      <button
        onClick={() => props.handleClick()}
      >Reset</button>
    </div>
  );
};

function performCalculation(props) {
  const conversionWeight = ingredientWeights[props.ing];
  // I know that props.sys will always be a string, hence abstract equality comparator
  // eslint-disable-next-line
  const volumeRate = props.sys == "Imperial" ? imperialVolumeRates[props.unit] : usLegalVolumeRates[props.unit];
  return conversionWeight * volumeRate;
}
const ingredientWeights = {
  "flour": 0.42268,
  "sugar": 0.8,
  "cocoa": 0.528,
  "butter": 0.955,
  "almond-flour": 0.406,
  "rice-flour": 0.68
}
const imperialVolumeRates = {
  "Cups": 284,
  "Teaspoon": 5,
  "Tablespoon": 17.7582,
  "Fluid Dram": 3.696691,
  "Fluid Oz": 28.4131
}
const usLegalVolumeRates = {
  "Cups": 240.131,
  "Teaspoon": 5,
  "Tablespoon": 14.7868,
  "Fluid Dram": 3.696691,
  "Fluid Oz": 29.57344
}

export default Output;
