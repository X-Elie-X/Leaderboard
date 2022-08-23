import './style.css';
const Scores = {
  Score1: ['Name', 100],
  Score2: ['Name', 20],
  Score3: ['Name', 50],
  Score4: ['Name', 78],
  Score5: ['Name', 125],
  Score6: ['Name', 77],
  Score7: ['Name', 42],
  Score8: ['Name', 200],
};

const Board = document.querySelector('.list');
Board.innerHTML = `
<ul>
<li>${Scores.Score1[0]}:   ${Scores.Score1[1]}</li>
<li>${Scores.Score2[0]}:   ${Scores.Score2[1]}</li>
<li>${Scores.Score3[0]}:   ${Scores.Score3[1]}</li>
<li>${Scores.Score4[0]}:   ${Scores.Score4[1]}</li>
<li>${Scores.Score5[0]}:   ${Scores.Score5[1]}</li>
<li>${Scores.Score6[0]}:   ${Scores.Score6[1]}</li>
<li>${Scores.Score7[0]}:   ${Scores.Score7[1]}</li>
<li>${Scores.Score8[0]}:   ${Scores.Score8[1]}</li>
</ul>`;
