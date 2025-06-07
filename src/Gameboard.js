import { Ship } from './Ship';

function Gameboard() {
  function setShips() {
    const occupied = [];

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

          // ✅ Make sure ship is inside grid
          if (newX >= 10 || newY >= 10) {
            valid = false;
            break;
          }

          // ✅ Check if this cell is already taken
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

    function receiveAttack () {
      
    }

    const ships = [new Ship(5), new Ship(4), new Ship(3), new Ship(3), new Ship(2)];
    ships.forEach(ship => {
      const pos = generateValidPosition(ship.length);
    })
  }

  return {
    setShips
  };
}

export { Gameboard };
