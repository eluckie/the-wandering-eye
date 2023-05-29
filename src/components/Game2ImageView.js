import { connect } from "react-redux";
import PropTypes from "prop-types";
import Puzzle1 from "./../img/1.jpg";
import Puzzle2 from "./../img/2.jpg";
import Puzzle3 from "./../img/3.jpg";
import Puzzle4 from "./../img/4.jpg";
import Puzzle5 from "./../img/5.jpg";
import Puzzle6 from "./../img/6.jpg";

function Game2Image(props) {
  const { difficulty, imageNumber } = props;
  const puzzleWidth = 600;
  const tileWidth = puzzleWidth / difficulty;
  const fullImageWidth = difficulty * tileWidth;
  
  let fullImageStyle = {
    maxWidth: `${fullImageWidth}px`,
    maxHeight: `${fullImageWidth}px`
  };

  let puzzle;
  if (imageNumber === 1) {
    puzzle = Puzzle1;
  } else if (imageNumber === 2) {
    puzzle = Puzzle2;
  } else if (imageNumber === 3) {
    puzzle = Puzzle3;
  } else if (imageNumber === 4) {
    puzzle = Puzzle4;
  } else if (imageNumber === 5) {
    puzzle = Puzzle5;
  } else {
    puzzle = Puzzle6;
  }

  if (!imageNumber) {
    return (
      <>
        <div></div>
      </>
    );
  } else {
    return (
      <>
        <div style={fullImageStyle}>
          <img src={puzzle} draggable="false" alt="full view"/>
        </div>
      </>
    );
  }
}

Game2Image.propTypes = {
  difficulty: PropTypes.number,
  imageNumber: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    imageNumber: state.imageNumber
  };
}

const Game2ImageView = connect(mapStateToProps)(Game2Image);

export default Game2ImageView;