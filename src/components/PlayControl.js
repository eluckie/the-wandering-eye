import GameStart from "./GameStart";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Game1Play from "./Game1Play";

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
      <Routes>
        <Route path="/game1" element={<Game1Play/>}/>
      </Routes>
    </>
  );
}

export default PlayControl;