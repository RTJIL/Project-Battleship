import './style.css';
import { Ship } from './Ship';
import { Gameboard } from './Gameboard';
import { Player } from './Player';
import { UIManager } from './UIManager';

let playerBoard = document.querySelector('.player-board');

for (let i = 0; i < 100; i++) {
  let cell = document.createElement('div');
  let x = i % columns;
  let y = Math.floor(i / columns);

  cell.classList.add('cell', `x${x}-y${y}`);


  playerBoard.appendChild(cell);
}

let aiBoard = document.querySelector('.ai-board');

for (let i = 0; i < 100; i++) {
  let cell = document.createElement('div');

  let x = i % columns;
  let y = Math.floor(i / columns);

  cell.classList.add('cell', `x${x}-y${y}`);

  let text = document.createElement('p');
  text.classList.add('text');
  text.textContent = 'X';

  cell.appendChild(text);
  aiBoard.appendChild(cell);
}
