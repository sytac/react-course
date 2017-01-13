import React from 'react';
import Message from './Message';

export default ({messages}) =>
  <ul className="messages">
    { messages.map((message, i) => <Message key={i} {...message} />) }
  </ul>;
