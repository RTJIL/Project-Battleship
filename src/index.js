import './style.css';
import { Ship } from './Ship';
import { Gameboard } from './Gameboard';
import { Player } from './Player';
import { Actions } from './Actions';

let playerBoard = document.querySelector('.player-board');

for (let i = 0; i < 100; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell', `cell${i}`);

  playerBoard.appendChild(cell);
}

let aiBoard = document.querySelector('.ai-board');

for (let i = 0; i < 100; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell', `cell${i}`);

  let text = document.createElement('p');
  text.classList.add('text');
  text.textContent = 'X';

  cell.appendChild(text);
  aiBoard.appendChild(cell);
}
