import { Ship } from './Ship';

function Gameboard() {
  const occupied = [];
  const ships = [];
  const missed = [];
  let hits = 0;

  function isOccupied(x, y) {
    for (let i = 0; i < occupied.length; i++) {
      if (occupied[i][0] === x && occupied[i][1] === y) {
        return true;
      }
    }
    return false;
  }

  function generateValidPosition(length) {
    const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';

    while (true) {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);

      const ship = [];

      let valid = true;

      for (let i = 0; i < length; i++) {
        const newX = direction === 'horizontal' ? x + i : x;
        const newY = direction === 'horizontal' ? y : y + i;

        if (newX >= 10 || newY >= 10) {
          valid = false;
          break;
        }

        if (isOccupied(newX, newY)) {
          valid = false;
          break;
        }

        ship.push([newX, newY]);
      }

      if (valid) {
        ship.forEach((cell) => occupied.push(cell));
        return ship;
      }
    }
  }

  function setShips() {
    const shipConf = [5, 4, 3, 3, 2];

    shipConf.forEach((length) => {
      const ship = new Ship(length);
      ship.position = generateValidPosition(length);
      ships.push(ship);
    });
  }

  function receiveAttack(x, y) {
    for (let ship of ships) {
      for (let coord of ship.position) {
        if (coord[0] === x && coord[1] === y) {
          ship.hit(x, y);
          hits++;
          return 'hit';
        }
      }
    }

    missed.push([x, y]);
    return 'miss';
    //If not found means miss
  }

  function isLoose () {
    return hits === 17;
  }

  return {
    setShips,
    receiveAttack,
    getMisses: () => missed,
    getShips: () => ships,
    isLoose,
  };
}

export { Gameboard };
