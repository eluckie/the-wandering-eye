import Banner from "./Banner";
import NavLinks from './NavLinks';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Game2ImageView from "./Game2ImageView";
import Game2Start from "./Game2Start";
import Game2Status from "./Game2Status";
import Game2View from "./Game2View";

function GamePlay(props) {
  const { gameComplete, moves } = props;

  const divStyles = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gridGap: 10,
    placeItems: "center"
  }

  const fullDiv = {
    display: "block",
    margin: "auto"
  }

  let gameDisplay;

  if (moves < 0) {
    gameDisplay = 
      <>
        <div style={fullDiv}>
        <h3>choose your color</h3>
      </div>
      <br/><br/><br/>
      <Game2Start/>
      <br/><br/><br/><br/>
      <Game2Status/>
      </>
  } else if (!gameComplete) {
    gameDisplay =
      <>
        <Game2Status/>
        <div style={divStyles}>
          <Game2ImageView/>
        <Game2View/>
      </div>
      <br/><br/><br/>
      <Game2Start/>
      </>
  } else {
    gameDisplay =
      <>
        <Game2Status/>
        <div style={fullDiv}>
          <Game2ImageView/>
        </div>
        <br/><br/><br/>
        <Game2Start/>
      </>
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="overlay">
      <Banner/>
      <Link to="/play/puzzle"><button><span className="buttonText">play puzzle</span></button></Link>
      <br/>
      {gameDisplay}
      <NavLinks/>
      <Banner/>
    </motion.div>
  );
}

GamePlay.propTypes = {
  gameComplete: PropTypes.bool,
  moves: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    gameComplete: state.sliderGamePlay.gameComplete,
    moves: state.sliderGamePlay.moves
  };
}

const Game2Play = connect(mapStateToProps)(GamePlay);

export default Game2Play;