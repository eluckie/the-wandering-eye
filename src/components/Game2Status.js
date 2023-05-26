import PropTypes from "prop-types";

function Game2Status(props) {
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
        <h3>{moves} moves</h3>
        <div className="game-instructions">
          <p>click on a surrounding tile to swap with the blank</p>
        </div>
      </>
    );
  }
}

Game2Status.propTypes = {
  gameComplete: PropTypes.bool,
  moves: PropTypes.number,
  imageNumber: PropTypes.number
};

export default Game2Status;