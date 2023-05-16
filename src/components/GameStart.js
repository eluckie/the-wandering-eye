import { connect } from "react-redux";
import { initGame as initGame1 } from "../actions/actions";
import { shuffleTiles } from "../actions/actions";
import PropTypes from "prop-types";

function GameStart(props) {
  const { onInitGame1 } = props;

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
        <div id="palette" onClick={() => onInitGame1(1)} style={colorPalette1Styles}></div>
        <div id="palette" onClick={() => onInitGame1(2)} style={colorPalette2Styles}></div>
        <div id="palette" onClick={() => onInitGame1(3)} style={colorPalette3Styles}></div>
        <div id="palette" onClick={() => onInitGame1(4)} style={colorPalette4Styles}></div>
        <div id="palette" onClick={() => onInitGame1(5)} style={colorPalette5Styles}></div>
        <div id="palette" onClick={() => onInitGame1(6)} style={colorPalette6Styles}></div>
      </div>
    </>
  );
}

GameStart.propTypes = {
  onInitGame1: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitGame1: (imageNumber) => {
      dispatch(initGame1(imageNumber));
      dispatch(shuffleTiles());
    }
  };
};

const GameStartView = connect(null, mapDispatchToProps)(GameStart);

export default GameStartView;