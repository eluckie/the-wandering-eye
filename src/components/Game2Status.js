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
  } else if (moves === 1) {
    return (
      <>
        <h3>1 move</h3>
        <div className="game-instructions">
          <p>click on a touching tile to swap with the blank</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h3>{moves} moves</h3>
        <div className="game-instructions">
          <p>click on a touching tile to swap with the blank</p>
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