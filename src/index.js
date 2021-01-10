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

const statsItem = document.querySelectorAll('li[class^=Statistics_statsItem]');

statsItem.forEach(item => {
  item.style.background = setBgColor();
});
