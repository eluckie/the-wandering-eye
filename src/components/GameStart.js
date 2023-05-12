import { Link } from "react-router-dom"

function GameStart(props) {
  const divStyles = {
    textAlign: "center"
  }
  const colorPalette1Styles = {
    width: 120,
    height: 120,
    display: "inline-block",
    backgroundColor: "#ccffff"
  }
  const colorPalette2Styles = {
    width: 120,
    height: 120,
    display: "inline-block",
    backgroundColor: "#ffff66"
  }
  const colorPalette3Styles = {
    width: 120,
    height: 120,
    display: "inline-block",
    backgroundColor: "#ff9966"
  }
  const colorPalette4Styles = {
    width: 120,
    height: 120,
    display: "inline-block",
    backgroundColor: "#ff00ff"
  }
  const colorPalette5Styles = {
    width: 120,
    height: 120,
    display: "inline-block",
    backgroundColor: "#0033cc"
  }
  const colorPalette6Styles = {
    width: 120,
    height: 120,
    display: "inline-block",
    backgroundColor: "#66ff66"
  }

  return (
    <>
      <div style={divStyles}>
        <p>choose your color</p>
        <Link to="/game1"><div style={colorPalette1Styles}></div></Link>
        <Link to="/game1"><div style={colorPalette2Styles}></div></Link>
        <Link to="/game1"><div style={colorPalette3Styles}></div></Link>
        <Link to="/game2"><div style={colorPalette4Styles}></div></Link>
        <Link to="/game2"><div style={colorPalette5Styles}></div></Link>
        <Link to="/game2"><div style={colorPalette6Styles}></div></Link>
      </div>
    </>
  );
}

export default GameStart;