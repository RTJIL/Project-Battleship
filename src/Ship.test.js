import { Ship } from './Ship';
const ship = new Ship(2);

describe('Ship class constructor', () => {
  test('Ship length', () => {
    expect(ship.length).toBe(2);
  });

  test('Ship sunk, false', () => {
    expect(ship.sunk).toBe(false);
  });
});

describe('Ship funcs', () => {  
  test(`Ship has't sunk`, () => {
    ship.hitted = 0;
    expect(ship.isSunk()).toBe(false);
  });
});
