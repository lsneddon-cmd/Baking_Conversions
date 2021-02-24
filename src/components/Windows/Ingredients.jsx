import React from 'react';

class Ingredients extends React.Component{
  render(){
    return(
      <div className="window-container">
        <p className="subheading">Welcome to Bake Buddy!</p>
        <p>Let's get started converting baking ingredients to measurements in the metric system!</p>
        <p>What type of ingredient do you have to convert?</p>
        <div className="button-container">
          <button className="flour-button"
          >Flour</button>
          <button className="sugar-button"
          >Sugar</button>
          <button className="butter-button"
          >Butter</button>
          <button className="cocoa-button"
          >Cocoa</button>
          <button className="liquid-button"
          >Liquid</button>
        </div>
      </div>
    );
  }
}

export default Ingredients;