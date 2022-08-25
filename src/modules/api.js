export const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tes17IVkemOTTVg2fUdz/scores/';

const from = document.querySelector('.form');
export const postData = async (post) => {
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
