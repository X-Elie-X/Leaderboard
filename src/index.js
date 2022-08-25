import './style.css';

import { url } from './modules/api.js';

const showList = document.querySelector('.list');
const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  showList.innerHTML = data.result
    .map((info) => `<li>${info.user}:${info.score}</li>`)
    .join('');
};

const refresh = document.querySelector('.refresh-btn');
refresh.addEventListener('click', getData);
