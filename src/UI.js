import { Player } from './Player';

function UI() {
  function renderUI() {
    let playerBoard = document.querySelector('.player-board');
    const rows = 10;
    const columns = 10;

    for (let i = 0; i < 100; i++) {
      let cell = document.createElement('div');
      let x = i % rows;
      let y = rows - 1 - Math.floor(i / columns);

      cell.classList.add('cell', 'player');

      cell.dataset.x = `${x}`;
      cell.dataset.y = `${y}`;

      let text = document.createElement('p');
      text.classList.add('text', 'unhitted');
      text.textContent = 'X';

      cell.appendChild(text);

      playerBoard.appendChild(cell);
    }

    let aiBoard = document.querySelector('.ai-board');

    for (let i = 0; i < 100; i++) {
      let cell = document.createElement('div');

      let x = i % rows;
      let y = rows - 1 - Math.floor(i / columns);

      cell.classList.add('cell', 'ai');
      cell.dataset.x = `${x}`;
      cell.dataset.y = `${y}`;

      let text = document.createElement('p');
      text.classList.add('text', 'unhitted');
      text.textContent = 'X';

      cell.appendChild(text);
      aiBoard.appendChild(cell);
    }
  }

  function showPlayerShips(ships) {
    const cells = document.querySelectorAll('.player');

    ships.forEach((ship) => {
      ship.position.forEach((part) => {
        cells.forEach((cell) => {
          if (
            Number(cell.dataset.x) === part[0] &&
            Number(cell.dataset.y) === part[1]
          ) {
            cell.classList.add('ship-part');
          }
        });
      });
    });
  }

  function showAIShips(ships) {
    const cells = document.querySelectorAll('.ai');

    ships.forEach((ship) => {
      ship.position.forEach((part) => {
        cells.forEach((cell) => {
          if (
            Number(cell.dataset.x) === part[0] &&
            Number(cell.dataset.y) === part[1]
          ) {
            cell.classList.add('ship-part');
          }
        });
      });
    });
  }

  function playerMove(ai, callback) {
    let hitCells = document.querySelectorAll('.ai');
    hitCells.forEach((cell) => {
      const text = cell.querySelector('.text');
      const cellX = cell.dataset.x;
      const cellY = cell.dataset.y;

      cell.addEventListener(
        'click',
        function handleClick() {
          const attackResult = ai?.board?.receiveAttack(
            Number(cellX),
            Number(cellY)
          );

          if (attackResult === 'miss') {
            text.classList.remove('unhitted');
            text.classList.add('missed');
          } else {
            text.classList.remove('unhitted');
            cell.classList.add('hit');
          }

          if (callback) callback();
        },
        { once: true }
      );
    });
  }

  function aiMove(player, ai) {
    let aiAttack = ai?.aiAttack(player.board);

    let { x, y, result } = aiAttack;

    let hitCells = document.querySelectorAll('.player');

    hitCells.forEach((cell) => {
      const text = cell.querySelector('.text');
      const cellX = Number(cell.dataset.x);
      const cellY = Number(cell.dataset.y);

      if (cellX === x && cellY === y) {
        if (result === 'miss') {
          text.classList.remove('unhitted');
          text.classList.add('missed');
        } else {
          text.classList.remove('unhitted');
          cell.classList.add('hit');
        }
      }
    });
  }

  return {
    renderUI,
    playerMove,
    aiMove,
    showPlayerShips,
    showAIShips,
  };
}

export { UI };
