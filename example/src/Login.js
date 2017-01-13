import React from 'react';

export default ({onPress}) =>
  <div className="login">
    <h1>Welcome to Sytac chat!</h1>
    <h2>Please log in</h2>
    <button onClick={onPress}>Sign in</button>
  </div>;
