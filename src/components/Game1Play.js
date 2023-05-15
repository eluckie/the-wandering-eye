import GameStatusView from "./GameStatus";
import Game1View from "./Game1View";
import GameStartView from "./GameStart";
import Header from "./Header";

function Game1Play() {
  return (
    <>
      <Header/>
      <GameStatusView/>
      <Game1View/>
      <br/><br/>
      <GameStartView/>
    </>
  );
}

export default Game1Play;