import PropTypes from "prop-types";

function Game2Start(props) {
  const { onInitGame2 } = props;

  const divStyles = {
    textAlign: "center"
  }
  const colorPalette1Styles = {
    backgroundColor: "#ccffff"
  }
  const colorPalette2Styles = {
    backgroundColor: "#ffff66"
  }
  const colorPalette3Styles = {
    backgroundColor: "#ff9966"
  }
  const colorPalette4Styles = {
    backgroundColor: "#ff00ff"
  }
  const colorPalette5Styles = {
    backgroundColor: "#0033cc"
  }
  const colorPalette6Styles = {
    backgroundColor: "#66ff66"
  }

  return (
    <>
      <div style={divStyles}>
        <div id="palette" onClick={() => onInitGame2(1)} style={colorPalette1Styles}></div>
        <div id="palette" onClick={() => onInitGame2(2)} style={colorPalette2Styles}></div>
        <div id="palette" onClick={() => onInitGame2(3)} style={colorPalette3Styles}></div>
        <div id="palette" onClick={() => onInitGame2(4)} style={colorPalette4Styles}></div>
        <div id="palette" onClick={() => onInitGame2(5)} style={colorPalette5Styles}></div>
        <div id="palette" onClick={() => onInitGame2(6)} style={colorPalette6Styles}></div>
      </div>
    </>
  );
}

Game2Start.propTypes = {
  onInitGame2: PropTypes.func
};

export default Game2Start;