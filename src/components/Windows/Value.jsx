import React from "react";

class Value extends React.Component {
  render() {
    return (
      <div className="window-container">
        <p className="subheading">
          Finally, how many ...JSX... do you have to convert?
        </p>
        <input type="number" />
        <p>Use a decimal for a fractional number</p>
        <button>Let's Go!</button>
      </div>
    );
  }
}

export default Value;
