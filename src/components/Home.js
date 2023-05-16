import Logo from "./../img/Cover.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const photoStyles = {
    height: 680,
    width: 680,
    borderRadius: "50%",
    margin: 10
  }
  
  const divStyles = {
    textAlign: "center"
  }

  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}>
      <div style={divStyles}>
        <Link to="/browse"><img style={photoStyles} src={Logo} alt=""/></Link>
      </div>
    </motion.div>
  );
}

export default Home;