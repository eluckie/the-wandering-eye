import PropTypes from "prop-types";
import { connect } from "react-redux";

function GameStatus(props) {
  const { gameComplete, moves, imageNumber } = props;

  if (gameComplete) {
    return (
      <>
        <br/>
        <h2>You used {moves} turns</h2>
        <p>choose another color</p>
        <br/>
      </>
    );
  } else if (!imageNumber) {
    return (
      <>
        <br/>
        <h3>choose your color</h3>
      </>
    )
  } else {
    return (
      <>
        <br/>
        <h5>imageNumber: {imageNumber}</h5>
        <h3>{moves} moves</h3>
        <div className="game-instructions">
          <p>click on a surrounding tile to swap with the blank</p>
        </div>
      </>
    );
  }
}

GameStatus.propTypes = {
  gameComplete: PropTypes.bool,
  moves: PropTypes.number,
  imageNumber: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    gameComplete: state.sliderGamePlay.gameComplete,
    moves: state.sliderGamePlay.moves,
    imageNumber: state.sliderGamePlay.imageNumber
  };
}

const Game2Status = connect(mapStateToProps)(GameStatus);

export default Game2Status;