import React, { useState } from "react";

const Unit = () => {
  const [unit, setUnit] = useState("unselected");

  return (
    <div className="window-container">
      <p>Which Unit of volume would you like to convert from? {unit}</p>
      <button onClick={() => setUnit("Cups")}>Cups</button>
      <button onClick={() => setUnit("Teaspoon")}>Teaspoon</button>
      <button onClick={() => setUnit("Tablespoon")}>Tablespoon</button>
      <button onClick={() => setUnit("Fluid Oz")}>Fluid Oz</button>
      <button onClick={() => setUnit("Fluid Dram")}>Fluid Dram</button>
    </div>
  );
};

export default Unit;
