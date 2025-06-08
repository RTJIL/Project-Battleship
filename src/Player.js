import { Gameboard } from './Gameboard';

class Player {
  constructor(ai = false) {
    this.board = Gameboard();
    this.ai = ai;
    this.attackedPositionsAi = [];
  }

  attack(x, y, enemyboard) {
    enemyboard?.receiveAttack?.(x, y);
    return [x, y];
  }

  aiAttack(enemyboard) {
    if (!this.ai || this.attackedPositionsAi.length >= 100) {
      return { x: -1, y: -1, result: 'no-attack' }; // always return something
    }

    let x, y;

    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (this._hasAlreadyAttackedAi(x, y));
    this.attackedPositionsAi.push([x, y]);

    const result = enemyboard?.receiveAttack?.(x, y);

    return {
      x,
      y,
      result,
    };
  }

  _hasAlreadyAttackedAi(x, y) {
    return this.attackedPositionsAi.some((pos) => pos[0] === x && pos[1] === y);
  }
}

export { Player };
