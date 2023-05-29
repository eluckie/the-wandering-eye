import Game1Status from "./Game1Status";
import Game1View from "./Game1View";
import Game1Start from "./Game1Start";
import Banner from "./Banner";
import NavLinks from './NavLinks';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Game1Play() {
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
      <Link to="/play/slider"><button><span style={buttonText}>play slider</span></button></Link>
      <br/>
      <Game1Status/>
      <Game1View/>
      <br/><br/>
      <Game1Start/>
      <NavLinks/>
      <Banner/>
    </motion.div>
  );
}

export default Game1Play;