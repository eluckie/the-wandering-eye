import PropTypes from "prop-types";
import { connect } from "react-redux";

function GameStatus(props) {
  const { gameComplete, turnNo, clicksWithinTurn, imageNumber } = props;

  if (gameComplete) {
    return (
      <>
        <div className="game-status">
          <p>
            GAME FINISHED<br/>
            You used {turnNo - 1} turns<br/><br/>
            choose another color
          </p>
        </div>
      </>
    );
  } else if (!imageNumber) {
    return (
      <>
        <p>choose your color</p>
      </>
    )
  } else {
    return (
      <div className="game-status">
        <p>turn {turnNo}</p>
        <div className="game-instructions">
          {clicksWithinTurn === 0 && (
            <div>
              click on the tile that should be moved
            </div>
          )}
          {clicksWithinTurn === 1 && (
            <div>
              click on the tile to swap with the first
            </div>
          )}
        </div>
      </div>
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