import React from "react";

const Toggle = (props) => {

  return (
    <div className="window-container">
      <p>Which system are we converting from? {props.conv}</p>
      <button onClick={() => props.handleClick("Imperial")}>Imperial</button>
      <p className="subheading">or</p>
      <button onClick={() => props.handleClick("US Legal")}>US Legal</button>
    </div>
  );
};

export default Toggle;
