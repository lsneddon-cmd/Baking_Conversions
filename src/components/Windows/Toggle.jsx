import React from "react";

const Toggle = (props) => {

  return (
    <div className="window-container">
      <p>Which system are we converting from?</p>
      <button onClick={() => {
        props.handleClick("Imperial");
        props.updateWindow("Value");
        }}>Imperial</button>
      <p className="subheading">or</p>
      <button onClick={() => {
        props.handleClick("US Legal");
        props.updateWindow("Value");
        }}>US Legal</button>
    </div>
  );
};

export default Toggle;
