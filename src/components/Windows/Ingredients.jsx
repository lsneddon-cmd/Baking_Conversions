import React, { useState } from 'react';

// clicking a button should update parent to
// render Unit component and track which ingredient was clicked

const Ingredients = () => {

  const [ ingredient, setIngredient ] = useState("unselected");

    return(
      <div className="window-container">
        <p className="subheading">Welcome to Bake Buddy!</p>
        <p>Let's get started converting baking ingredients to measurements in the metric system!</p>
        <p>What type of ingredient do you have to convert?</p>
        <div className="button-container">
          <p>{ingredient}</p>
          <button 
            className="flour-button"
            onClick={() => setIngredient("flour")}
          >Flour</button>
          <button 
            className="sugar-button"
            onClick={() => setIngredient("sugar")}
          >Sugar</button>
          <button 
            className="butter-button"
            onClick={() => setIngredient("button")}
          >Butter</button>
          <button 
            className="cocoa-button"
            onClick={() => setIngredient("cocoa")}
          >Cocoa</button>
          <button 
            className="liquid-button"
            onClick={() => setIngredient("liquid")}
          >Liquid</button>
        </div>
      </div>
    );
}

export default Ingredients;