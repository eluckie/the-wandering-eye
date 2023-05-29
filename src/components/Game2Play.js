import Banner from "./Banner";
import NavLinks from './NavLinks';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Game2ImageView from "./Game2ImageView";
import Game2Start from "./Game2Start";
import Game2Status from "./Game2Status";
import Game2View from "./Game2View";
import { initGame2 } from "../actions/actions";

function Game2Play() {
  const buttonText = {
    fontWeight: "bold",
    fontSize: 16,
    color: "black"
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
      <Game2View/>
      <Game2ImageView/>
      <br/><br/>
      <Game2Start
        onInitGame2={initGame2}/>
      <NavLinks/>
      <Banner/>
    </motion.div>
  );
}

export default Game2Play;