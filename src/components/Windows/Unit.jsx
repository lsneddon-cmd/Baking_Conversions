import React from 'react';

class Unit extends React.Component{
  render(){
    return(
      <div className="window-container">
        <p>Which Unit of volume would you like to convert from?</p>
        <button>Cups</button>
        <button>Teaspoon</button>
        <button>Tablespoon</button>
        <button>Fluid Oz</button>
        <button>Fluid Dram</button>
      </div>
    );
  }
}

export default Unit;