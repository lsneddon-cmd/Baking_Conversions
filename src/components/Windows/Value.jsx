import React from "react";

function Value(props) {

  return (
    <div className="window-container">
      <p className="subheading">
        Finally, how many {props.unit} do you have to convert?
      </p>
      <input
        type="number"
        onChange={(event) => {
          props.handleClick(event.target.value);
        }}
        onBlur={(event) => {
          props.handleClick(event.target.value);
        }}
      />
      <p>Use a decimal for a fractional number</p>
      <button
        onClick={() => props.updateWindow("Output")}
      >Let's Go!</button>
    </div>
  );
};

export default Value;
