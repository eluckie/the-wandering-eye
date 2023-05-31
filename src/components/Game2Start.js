import PropTypes from "prop-types";
import { initGame2 } from "../actions/actions";
import { connect } from "react-redux";

function GameStart(props) {
  const { onInitGame2 } = props;

  const colorPalette1Styles = {
    backgroundColor: "#9cf9f9"
  }

  const colorPalette2Styles = {
    backgroundColor: "#41b5bd"
  }

  const colorPalette3Styles = {
    backgroundColor: "#39742a"
  }

  const colorPalette4Styles = {
    backgroundColor: "#98b918"
  }

  const colorPalette5Styles = {
    backgroundColor: "#f6d83c"
  }
  
  const colorPalette6Styles = {
    backgroundColor: "#b95418"
  }

  return (
    <>
      <div className="center">
        
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

GameStart.propTypes = {
  onInitGame2: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitGame2: (imageNumber) => {
      dispatch(initGame2(imageNumber));
    }
  };
};

const Game2Start = connect(null, mapDispatchToProps)(GameStart);

export default Game2Start;