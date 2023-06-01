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
import Instructions from "./Game2Instructions";
import HighScores from "./Game2HighScores";
import { useState } from "react";

function Game2Image(props) {
  const { imageNumber, gameComplete } = props;

  const [openInstructions, setOpenInstructions] = useState(false);
  const [openHighScores, setOpenHighScores] = useState(false);

  const imageStyle = {
    height: 260,
    margin: 40,
    border: "2px solid grey",
    borderRadius: "0.7rem"
  }

  const fullImageStyle = {
    height: "100%",
    border: "none",
    borderRadius: "0.7rem"
  }

  let puzzle;
  let fullView;
  let altText;

  if (imageNumber === 1) {
    puzzle = Puzzle1;
    fullView = Full1;
    altText = "view from a cliff-top overlooking the waves washing up along a rocky beach and a giant rock in the water shaped as a shark's fin. Rocks and clifftop lined with green plants";
  } else if (imageNumber === 2) {
    puzzle = Puzzle2;
    fullView = Full2;
    altText = "view from between dark green and weather-stripped trees of snow-capped mountains against bright blue sky. a peek at the Rocky Mountains";
  } else if (imageNumber === 3) {
    puzzle = Puzzle3;
    fullView = Full3;
    altText = "view looking upward from inside of a lush green canyon in the forest. rocky walls lining the side and lush green forest and trees peeking out from the top";
  } else if (imageNumber === 4) {
    puzzle = Puzzle4;
    fullView = Full4;
    altText = "view of a small, calm creek surrounded by fluffy yellow-green bushes along either side and lined with trees further back. beautful blue sky with about half-full fluffy white clouds";
  } else if (imageNumber === 5) {
    puzzle = Puzzle5;
    fullView = Full5;
    altText = "view of 2 small trees in the middle of a small lake from between colorful big bushes and fluffy trees. many shades of yellows, greens, and reds in the bushes and mostly yellow with some shades of green in the trees";
  } else {
    puzzle = Puzzle6;
    fullView = Full6;
    altText = "nearly head-on view of San Francisco's Golden Gate Bridge. with the ocean to the left and hills to the right of the bridge, it also shows the structure and road passing through underneath the bridge";
  }

  if (gameComplete) {
    return (
      <>
        <div className="center">
          <img style={fullImageStyle} src={fullView} draggable="false" alt={altText}/>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="center">
          <button onClick={() => setOpenInstructions(true)}>how to</button>
          <button onClick={() => setOpenHighScores(true)}>high scores</button>
          <Instructions
            open={openInstructions}
            onClose={() => setOpenInstructions(false)}/>
          <HighScores
            open={openHighScores}
            onClose={() => setOpenHighScores(false)}/>
          <img style={imageStyle} src={puzzle} draggable="false" alt={altText}/>
        </div>
      </>
    );
  }
}

Game2Image.propTypes = {
  imageNumber: PropTypes.number,
  gameComplete: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    imageNumber: state.sliderGamePlay.imageNumber,
    gameComplete: state.sliderGamePlay.gameComplete
  };
}

const Game2ImageView = connect(mapStateToProps)(Game2Image);

export default Game2ImageView;