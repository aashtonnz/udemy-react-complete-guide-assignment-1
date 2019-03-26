import React from 'react';

const userOutput = (props) => {
  const style = {
    width: '500px',
    margin: 'auto',
    textAlign: 'left',
  }
  return (
    <div style={style}>
      <h3>{props.userName}</h3>
      <p>Laboris labore qui est aute eu consequat magna ad velit laborum culpa.</p>
      <p>Nostrud qui irure labore deserunt exercitation excepteur exercitation. Eu culpa veniam tempor et minim occaecat ut consectetur reprehenderit dolore duis id quis culpa. Adipisicing adipisicing consectetur quis excepteur anim Lorem consectetur dolore laboris dolor nisi. Cillum eu qui ullamco veniam sit esse consequat velit non nulla ipsum nulla ex. In commodo deserunt Lorem incididunt esse esse laborum. Commodo veniam aliqua nostrud sint eiusmod voluptate aliqua minim. Dolor non ex nostrud culpa qui.</p>
    </div>
  );
};

export default userOutput;
