import React from 'react';
import User from './User';

export default ({users}) =>
  <ul className="users">
    { Object.keys(users).map((user, i) => <User key={i} {...users[user]} />) }
  </ul>;
