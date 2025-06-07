import { Gameboard } from './Gameboard';

describe('Gameboard', () => {
  let playerBoard = Gameboard();
  test('playerBoard setShips', () => {
    playerBoard.setShips();
    let ships = playerBoard.getShips();
    expect(ships.length).toBe(5);
  });
});
