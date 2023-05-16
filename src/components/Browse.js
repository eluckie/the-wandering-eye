import Header from "./Header";
import { motion } from "framer-motion";

function Browse() {
  const divStyles = {
    textAlign: "center",
    border: "4px solid black",
    width: 400,
    margin: "auto"
  }
  
  const headerStyles = {
    color: "red"
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <Header/>
      <br/><br/>
      <div style={divStyles}>
        <h1 style={headerStyles}>PAGE UNDER CONSTRUCTION</h1>
        <h3>browse feature coming soon</h3>
      </div>
    </motion.div>
  );
}

export default Browse;