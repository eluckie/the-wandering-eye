import GameStart from "./GameStart";
import { Link } from "react-router-dom";

function PlayControl() {
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
      <div style={divStyles}>
        <GameStart/>
        <br/><br/><br/><br/><br/><br/>
        <Link to="/"><p style={linkStyles}>home</p></Link>
        <Link to="/zine"><p style={linkStyles}>zine</p></Link>
        <Link to="/about"><p style={linkStyles}>about</p></Link>
        <br/>
      </div>
    </>
  );
}

export default PlayControl;