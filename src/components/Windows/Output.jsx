import React from "react";

const Output = (props) => {
  return (
    <div className="window-container">
      <p className="subheading">Converted!</p>
      <p>There are {props.calculatedValue} {props.sys}'s of {props.ing} in {props.amount} {props.unit}s</p>
      <button
        onClick={() => props.handleClick()}
      >Reset</button>
    </div>
  );
};

export default Output;
