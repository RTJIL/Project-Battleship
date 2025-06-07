import { Player } from './Player';
describe('Player', () => {
  const human = new Player();
  const ai = new Player();
  let atack = human.attack(0, 2);
  test('player atacks another player', () => {
    let humanPlayer = new Player();
    let atackCoords = humanPlayer.attack(1, 2);
    expect(atackCoords[0]).toBe(1);
    expect(atackCoords[1]).toBe(2);
  });

  test('player atacks ai', () => {
    let getAtack = ai.board.receiveAttack(atack);
    expect(['hit', 'miss']).toContain(getAtack);
  });

  test('miss', () => {
    let getAtack = ai.board.receiveAttack(atack);
    expect('miss').toContain(getAtack);
  });

  test('ai atacks player', () => {
    let getAtack = human.board.receiveAttack(atack)
    expect(['hit', 'miss']).toContain(getAtack);
  })
});
