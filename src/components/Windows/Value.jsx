import React, { useState } from "react";

const Value = () => {
  const [amount, setAmount] = useState(0);

  return (
    <div className="window-container">
      <p className="subheading">
        Finally, how many ...pass props... do you have to convert? {amount}
      </p>
      <input
        type="number"
        onChange={(event) => setAmount(event.target.value)}
      />
      <p>Use a decimal for a fractional number</p>
      <button>Let's Go!</button>
    </div>
  );
};

export default Value;
