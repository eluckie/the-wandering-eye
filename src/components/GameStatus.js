import PropTypes from "prop-types";
import { connect } from "react-redux";

function GameStatus(props) {
  const { gameComplete, turnNo, clicksWithinTurn, imageNumber } = props;

  if (gameComplete) {
    return (
      <>
        <br/>
        <h2>You used {turnNo - 1} turns</h2>
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
        <h3>turn {turnNo}</h3>
        <div className="game-instructions">
          {clicksWithinTurn === 0 && (
            <p>
              click on a tile to move
            </p>
          )}
          {clicksWithinTurn === 1 && (
            <p>
              click on a tile to swap with the first
            </p>
          )}
        </div>
      </>
    );
  }
}

GameStatus.propTypes = {
  gameComplete: PropTypes.bool,
  turnNo: PropTypes.number,
  clicksWithinTurn: PropTypes.number,
  imageNumber: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    gameComplete: state.gameComplete,
    turnNo: state.turnNo,
    clicksWithinTurn: state.clicksWithinTurn,
    imageNumber: state.imageNumber
  };
}

const GameStatusView = connect(mapStateToProps)(GameStatus);

export default GameStatusView;