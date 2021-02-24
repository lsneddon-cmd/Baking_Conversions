import React from 'react';

class Toggle extends React.Component{
  render(){
    return (
      <div className="window-container">
        <p>Which system are we converting from?</p>
        <button>Imperial</button>
        <p className="subheading">or</p>
        <button>US Legal</button>
      </div>
      );
  }
}

export default Toggle;