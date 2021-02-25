import React from "react";

const Value = (props) => {

  return (
    <div className="window-container">
      <p className="subheading">
        Finally, how many ...pass props... do you have to convert? {props.amount}
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
