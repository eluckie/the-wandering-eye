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
  const { gameComplete } = props;

  const buttonText = {
    fontWeight: "bold",
    fontSize: 16,
    color: "black"
  }

  const divStyles = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gridGap: 10,
    placeItems: "center"
  }

  const gameWonDiv = {
    display: "block",
    margin: "auto"
  }

  let gameDisplay;

  if (!gameComplete) {
    gameDisplay =
      <div style={divStyles}>
        <Game2ImageView/>
        <Game2View/>
      </div>
  } else {
    gameDisplay =
      <div style={gameWonDiv}>
        <Game2ImageView/>
      </div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <Banner/>
      <Link to="/play/puzzle"><button><span style={buttonText}>play puzzle</span></button></Link>
      <br/>
      <Game2Status/>
      {gameDisplay}
      <br/><br/><br/>
      <Game2Start/>
      <NavLinks/>
      <Banner/>
    </motion.div>
  );
}

GamePlay.propTypes = {
  gameComplete: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    gameComplete: state.sliderGamePlay.gameComplete
  };
}

const Game2Play = connect(mapStateToProps)(GamePlay);

export default Game2Play;