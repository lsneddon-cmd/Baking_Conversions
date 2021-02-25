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
        <button 
          className="flour-button" 
          onClick={() => {
            props.handleClick("flour");
            props.updateWindow("Unit");
          }}
        >
          Flour
        </button>
        <button 
          className="sugar-button"
          onClick={() => {
            props.handleClick("sugar");
            props.updateWindow("Unit");
          }}
        >
          Sugar
        </button>
        <button
          className="butter-button"
          onClick={() => {
            props.handleClick("butter");
            props.updateWindow("Unit");
          }}
        >
          Butter
        </button>
        <button 
          className="cocoa-button"
          onClick={() => {
            props.handleClick("cocoa");
            props.updateWindow("Unit");
          }}
        >
          Cocoa
        </button>
        <button
          className="liquid-button"
          onClick={() => {
            props.handleClick("liquid");
            props.updateWindow("Unit");
          }}
        >
          Liquid
        </button>
      </div>
    </div>
  );
};

export default Ingredients;
