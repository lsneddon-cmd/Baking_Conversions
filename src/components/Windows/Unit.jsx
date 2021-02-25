import React from "react";

const Unit = (props) => {

  return (
    <div className="window-container">
      <p>Which Unit of volume would you like to convert from? {props.unit}</p>
      <button onClick={() => {
        props.handleClick("Cups");
        props.updateWindow("Toggle");
        }}>Cups</button>
      <button onClick={() => {
        props.handleClick("Teaspoon");
        props.updateWindow("Toggle");
        }}>Teaspoon</button>
      <button onClick={() => {
        props.handleClick("Tablespoon");
        props.updateWindow("Toggle");
        }}>Tablespoon</button>
      <button onClick={() => {
        props.handleClick("Fluid Oz");
        props.updateWindow("Toggle");
        }}>Fluid Oz</button>
      <button onClick={() => {
        props.handleClick("Fluid Dram");
        props.updateWindow("Toggle");
        }}>Fluid Dram</button>
    </div>
  );
};

export default Unit;
