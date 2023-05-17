import Logo from "./../img/Cover.png";
import NavLinks from './NavLinks';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const photoStyles = {
    height: 680,
    width: 680,
    overflow: "hidden",
    borderRadius: "50%",
    margin: 10,
    transition: "transform 0.25s"
  }
  
  const divStyles = {
    textAlign: "center"
  }

  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 360, 300, 0]
      }}>
      <div style={divStyles}>
        <Link to="/browse"><img id="hover" style={photoStyles} src={Logo} alt=""/></Link>
      </div>
      <NavLinks/>
    </motion.div>
  );
}

export default Home;