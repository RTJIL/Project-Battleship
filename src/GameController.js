import { UI } from './UI';
import { Player } from './Player';

function GameController() {
  function setGame() {
    const ui = UI();
    ui.renderUI();

    const ai = new Player(true);
    ai.board.setShips();

    const player = new Player();
    player.board.setShips();
    ui.showPlayerShips(player.board.getShips());

    let playerMove = true;

    function makeMove() {      
      if(player.board.isLoose()) {
        alert('AI wins. You loose your Job! XDDDDD');
        return;
      }

      if(ai.board.isLoose()) {
        alert('Player wins');
        return;
      }

      if (playerMove) {
        ui.playerMove(ai, () => {
          playerMove = false;
          makeMove();
        });
      } else {
        ui.aiMove(player, ai);
        playerMove = true;
      }
    }
    makeMove();
  }

  return { setGame };
}

export { GameController };
