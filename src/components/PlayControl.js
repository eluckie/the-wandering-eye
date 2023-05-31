import { Link } from "react-router-dom";
import Banner from "./Banner";
import NavLinks from './NavLinks';
import { motion } from "framer-motion";

function PlayControl() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <Banner/>
      <br/><br/>
      <h2>choose your game</h2>
      <br/><br/>
      <Link to="/play/puzzle"><button><span className="buttonText">puzzle</span></button></Link>
      <Link to="/play/slider"><button><span className="buttonText">slider</span></button></Link>
      <br/><br/><br/>
      <NavLinks/>
      <Banner/>
    </motion.div>
  );
}

export default PlayControl;