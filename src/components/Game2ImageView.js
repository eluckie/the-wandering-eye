import { connect } from "react-redux";
import PropTypes from "prop-types";
import Puzzle1 from "./../img/7.jpg";
import Puzzle2 from "./../img/8.jpg";
import Puzzle3 from "./../img/9.jpg";
import Puzzle4 from "./../img/10.jpg";
import Puzzle5 from "./../img/11.jpg";
import Puzzle6 from "./../img/12.jpg";
import Full1 from "./../img/seven.jpg";
import Full2 from "./../img/eight.jpg";
import Full3 from "./../img/nine.jpg";
import Full4 from "./../img/ten.jpg";
import Full5 from "./../img/eleven.jpg";
import Full6 from "./../img/twelve.jpg";

function Game2Image(props) {
  const { imageNumber, moves, gameComplete } = props;

  const imageStyle = {
    height: 260,
    margin: 40,
    border: "2px solid grey"
  };

  const fullImageStyle = {
    height: "100%",
    border: "none"
  };

  let puzzle;
  let fullView;

  if (imageNumber === 1) {
    puzzle = Puzzle1;
    fullView = Full1;
  } else if (imageNumber === 2) {
    puzzle = Puzzle2;
    fullView = Full2;
  } else if (imageNumber === 3) {
    puzzle = Puzzle3;
    fullView = Full3;
  } else if (imageNumber === 4) {
    puzzle = Puzzle4;
    fullView = Full4;
  } else if (imageNumber === 5) {
    puzzle = Puzzle5;
    fullView = Full5;
  } else {
    puzzle = Puzzle6;
    fullView = Full6;
  }

  if (moves < 0) {
    return (
      <>
        <div></div>
      </>
    );
  } else if (gameComplete) {
    return (
      <>
        <div className="center">
          <img style={fullImageStyle} src={fullView} draggable="false" alt="full view"/>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="center">
          <button>how to</button>
          <button>high scores</button>
          <img style={imageStyle} src={puzzle} draggable="false" alt="full view"/>
        </div>
      </>
    );
  }
}

Game2Image.propTypes = {
  difficulty: PropTypes.number,
  imageNumber: PropTypes.number,
  moves: PropTypes.number,
  gameComplete: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    imageNumber: state.sliderGamePlay.imageNumber,
    difficulty: state.sliderGamePlay.difficulty,
    moves: state.sliderGamePlay.moves,
    gameComplete: state.sliderGamePlay.gameComplete
  };
}

const Game2ImageView = connect(mapStateToProps)(Game2Image);

export default Game2ImageView;