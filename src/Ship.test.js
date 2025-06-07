import { Ship } from './Ship';
const ship = new Ship(2);

describe('Ship class constructor', () => {
  test('Ship length', () => {
    expect(ship.length).toBe(2);
  });

  test('Ship initial hitted times, 0', () => {
    expect(ship.hitted).toBe(0);
  });

  test('Ship sunk, false', () => {
    expect(ship.sunk).toBe(false);
  });
});

describe('Ship funcs', () => {
  test('ship gets hit', () => {
    ship.hit();
    expect(ship.hitted).toBe(1);
  });

  test('Ship is is sinking correctly', () => {
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
  
  test(`Ship has't sunk`, () => {
    ship.hitted = 0;
    expect(ship.isSunk()).toBe(false);
  });

  test('Does nothing if hitted > length', () => {
    ship.hitted = 2;
    ship.hit();
    expect(ship.hitted).toBe(2);
  });
});
