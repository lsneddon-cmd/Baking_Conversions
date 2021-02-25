import React from "react";

// clicking a button should update parent to
// render Unit component and track which ingredient was clicked

const Ingredients = (props) => {

  return (
    <div className="window-container">
      <p className="subheading">Welcome to Bake Buddy!</p>
      <p>
        Let's get started converting baking ingredients to measurements in the
        metric system!
      </p>
      <p>What type of ingredient do you have to convert?</p>
      <div className="button-container">
        <p>{props.ing}</p>
        <button 
          className="flour-button" 
          onClick={() => props.handleClick("flour")}
        >
          Flour
        </button>
        <button 
          className="sugar-button"
          onClick={() => props.handleClick("sugar")}
        >
          Sugar
        </button>
        <button
          className="butter-button"
          onClick={() => props.handleClick("butter")}
        >
          Butter
        </button>
        <button 
          className="cocoa-button"
          onClick={() => props.handleClick("cocoa")}
        >
          Cocoa
        </button>
        <button
          className="liquid-button"
          onClick={() => props.handleClick("liquid")}
        >
          Liquid
        </button>
      </div>
    </div>
  );
};

export default Ingredients;
