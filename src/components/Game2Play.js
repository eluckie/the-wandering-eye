import Banner from "./Banner";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Game2Play() {
  const divStyles = {
    textAlign: "center",
    border: "4px solid black",
    width: 400,
    margin: "auto"
  }
  
  const headerStyles = {
    color: "red"
  }

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
      <Link to="/play/puzzle"><button><span style={buttonText}>change game</span></button></Link>
      <br/><br/><br/><br/>
      <div style={divStyles}>
        <h1 style={headerStyles}>PAGE UNDER CONSTRUCTION</h1>
        <h3>slider game coming soon</h3>
      </div>
      <NavLinks/>
      <Banner/>
    </motion.div>
  );
}

export default Game2Play;