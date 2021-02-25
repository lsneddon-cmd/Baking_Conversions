import React from "react";
import "./App.css";
import Window from "../Window/Window.jsx";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>Bake</h1>
        <h1>Buddy</h1>
      </div>
      <div className="main-window">
        <Window />
      </div>
      <div className="footer">
        <p>
          Bake Buddy 2020 by{" "}
          <a target="blank" href="http://lewiscodes.io">
            Lewis Sneddon
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
