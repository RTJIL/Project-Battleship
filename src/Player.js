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
    if (!this.ai || this.attackedPositionsAi.length >= 100) return;

    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (this._hasAlreadyAttackedAi(x, y));
    this.attackedPositionsAi.push([x, y])

    return enemyboard?.receiveAttack?.(x, y);
  }

  _hasAlreadyAttackedAi(x, y) {
    return this.attackedPositionsAi.some((pos) => pos[0] === x && pos[1] === y);
  }
}

const human = new Player();
const ai = new Player(true);

let attack = human.attack(0, 2, ai.board);

export { Player };
