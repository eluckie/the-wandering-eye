import Game1Status from "./Game1Status";
import Game1View from "./Game1View";
import Game1Start from "./Game1Start";
import Banner from "./Banner";
import NavLinks from './NavLinks';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { connect } from "react-redux";

function GamePlay(props) {
  const { tiles } = props;

  let gameView;

  if (tiles.length === 0) {
    gameView = 
      <>
        <h3>choose your color</h3>
        <br/><br/><br/>
        <Game1Start/>
        <br/><br/><br/><br/>
        <Game1Status/>
      </>
  } else {
    gameView = 
      <>
        <Game1Status/>
        <Game1View/>
        <br/><br/>
        <Game1Start/>
      </>
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <Banner/>
      <Link to="/play/slider"><button><span className="buttonText">play slider</span></button></Link>
      <br/>
      {gameView}
      <NavLinks/>
      <Banner/>
    </motion.div>
  );
}

GamePlay.propTypes = {
  tiles: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    tiles: state.tileGamePlay.tiles
  };
}

const Game1Play = connect(mapStateToProps)(GamePlay);

export default Game1Play;