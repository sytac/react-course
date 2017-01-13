import React from 'react';

function onlineStatusClassName(timestamp) {
  return timestamp > Date.now() - 60 * 1000 ? 'online' : 'offline';
}

export default ({userName, lastOnline}) =>
  <li className={onlineStatusClassName(lastOnline)}>
    {userName}
  </li>;
