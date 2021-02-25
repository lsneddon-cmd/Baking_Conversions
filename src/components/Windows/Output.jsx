import React from "react";

const Output = (props) => {
  return (
    <div className="window-container">
      <p className="subheading">Converted!</p>
      <p>{``}</p>
      <button
        onClick={() => props.handleClick("Ingredients")}
      >Reset</button>
    </div>
  );
};

export default Output;
