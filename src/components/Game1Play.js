import GameStatusView from "./GameStatus";
import Game1View from "./Game1View";
import GameStartView from "./GameStart";
import Header from "./Header";
import { motion } from "framer-motion";

function Game1Play() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <Header/>
      <GameStatusView/>
      <Game1View/>
      <br/><br/>
      <GameStartView/>
    </motion.div>
  );
}

export default Game1Play;