import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  return (
    <div className="UserInput">
      <p>User name:</p>
      <input type="text" value={props.userName} onChange={props.change}/>
    </div>
  );
};

export default userInput;
