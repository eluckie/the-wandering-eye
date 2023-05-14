import { Link } from "react-router-dom";
import GameStatusView from "./GameStatus";
import Game1View from "./Game1View";
import GameStartView from "./GameStart";


function Game1Play() {
  const linkStyles = {
    padding: 20,
    display: "inline",
    margin: "auto"
  }

  const divStyles = {
    margin: "auto"
  }

  return (
    <>
      <GameStatusView/>
      <Game1View/>
      <br/><br/>
      <GameStartView/>
      <br/><br/><br/><br/>
      <div style={divStyles}>
        <Link to="/"><p style={linkStyles}>home</p></Link>
        <Link to="/zine"><p style={linkStyles}>zine</p></Link>
        <Link to="/about"><p style={linkStyles}>about</p></Link>
        <br/>
      </div>
    </>
  );
}

export default Game1Play;