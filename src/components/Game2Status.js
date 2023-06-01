import PropTypes from "prop-types";
import { connect } from "react-redux";
import Instructions from "./SliderInstructions";
import HighScores from "./SliderHighScores";
import { useState } from "react";

function GameStatus(props) {
  const { gameComplete, moves, imageNumber } = props;

  const [openInstructions, setOpenInstructions] = useState(false);
  const [openHighScores, setOpenHighScores] = useState(false);

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
  } else if (moves === 1) {
    return (
      <>
        <h3>1 move</h3>
        <br/><br/>
      </>
    );
  } else {
    return (
      <>
        <h3>{moves} moves</h3>
        <br/><br/>
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