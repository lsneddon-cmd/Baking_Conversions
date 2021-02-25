import React, { useState } from "react";

const Toggle = () => {

  const [ conversionSystem, setConversionSystem ] = useState("unselected");

  return (
    <div className="window-container">
      <p>Which system are we converting from? {conversionSystem}</p>
      <button
        onClick={() => setConversionSystem("Imperial")}
      >Imperial</button>
      <p className="subheading">or</p>
      <button
        onClick={() => setConversionSystem("US Legal")}
      >US Legal</button>
    </div>
  );
};

export default Toggle;
