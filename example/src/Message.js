import React from 'react';
import leftPad from 'left-pad';

function getTime(timestamp) {
  const time = new Date(timestamp);
  return `${time.getHours()}:${leftPad(time.getMinutes(), 2, '0')}`;
}

export default ({ userName, message, timestamp }) =>
  <li className="message">
    <span>{userName} <small>{getTime(timestamp)}</small></span>
    <p>{message}</p>
  </li>;
