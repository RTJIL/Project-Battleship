import './style.css';
import { Ship } from './Ship';
import { Gameboard } from './Gameboard';
import { Player } from './Player';
import { Actions } from './Actions';
import { GameController } from './GameController';
import { UI } from './UI';

let game = GameController();

game.setGame();

/* let ui = UI();

async function startGame() {
  ui.renderUI();

  const player = new Player();
  player.board.setShips();

  const ai = new Player(true);
  ai.board.setShips();

  ui.showPlayerShips(player.board.getShips());
  ui.showAIShips(ai.board.getShips());

  // Wait for the render to complete

  ui.playerMove(player)

  await ui.aiMove(player, ai);
} */

startGame();
