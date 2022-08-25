import './style.css';

import { url } from './modules/api';
import { Info } from 'luxon';

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

const from = document.querySelector('.form');
const postData = async (post) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(post),
  });
};
const user = document.querySelector('.name');
const score = document.querySelector('.num');

from.addEventListener('submit', (e) => {
  e.preventDefault();
  const post = {
    user: `${user.value}`,
    score: `${score.value}`,
  };
  postData(post);
  e.target.reset();
});
