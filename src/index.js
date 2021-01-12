import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import setBgColor from './bgColorGen';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

const statsItem = document.querySelectorAll('li[class^=StatsItem_listItem]');

statsItem.forEach(item => {
  item.style.background = setBgColor();
});
