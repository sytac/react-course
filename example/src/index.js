import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const chatApi = new ChatApi(); //eslint-disable-line
ReactDOM.render(
  <App chatApi={chatApi} />,
  document.getElementById('root')
);
