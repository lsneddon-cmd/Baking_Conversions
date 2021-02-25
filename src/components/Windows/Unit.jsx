import React from "react";

const Unit = (props) => {

  return (
    <div className="window-container">
      <p>Which Unit of volume would you like to convert from? {props.unit}</p>
      <button onClick={() => props.handleClick("Cups")}>Cups</button>
      <button onClick={() => props.handleClick("Teaspoon")}>Teaspoon</button>
      <button onClick={() => props.handleClick("Tablespoon")}>Tablespoon</button>
      <button onClick={() => props.handleClick("Fluid Oz")}>Fluid Oz</button>
      <button onClick={() => props.handleClick("Fluid Dram")}>Fluid Dram</button>
    </div>
  );
};

export default Unit;
