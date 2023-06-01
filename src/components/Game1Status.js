import PropTypes from "prop-types";
import { connect } from "react-redux";
import Instructions from "./Game1Instructions";
import HighScores from "./Game1HighScores";
import { useState } from "react";

function GameStatus(props) {
  const { gameComplete, turnNo, imageNumber } = props;

  const [openInstructions, setOpenInstructions] = useState(false);
  const [openHighScores, setOpenHighScores] = useState(false);

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
        <button onClick={() => setOpenInstructions(true)}>how to</button>
        <button onClick={() => setOpenHighScores(true)}>high scores</button>
        <Instructions
          open={openInstructions}
          onClose={() => setOpenInstructions(false)}/>
        <HighScores
          open={openHighScores}
          onClose={() => setOpenHighScores(false)}/>
      </>
    )
  } else {
    return (
      <>
        <br/>
        <h3>turn {turnNo}</h3>
        <button onClick={() => setOpenInstructions(true)}>how to</button>
        <button onClick={() => setOpenHighScores(true)}>high scores</button>
        <Instructions
            open={openInstructions}
            onClose={() => setOpenInstructions(false)}/>
          <HighScores
            open={openHighScores}
            onClose={() => setOpenHighScores(false)}/>
      </>
    );
  }
}

GameStatus.propTypes = {
  gameComplete: PropTypes.bool,
  turnNo: PropTypes.number,
  imageNumber: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    gameComplete: state.tileGamePlay.gameComplete,
    turnNo: state.tileGamePlay.turnNo,
    imageNumber: state.tileGamePlay.imageNumber
  };
}

const Game1Status = connect(mapStateToProps)(GameStatus);

export default Game1Status;