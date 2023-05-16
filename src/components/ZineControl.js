import { Link, Routes, Route } from "react-router-dom";
import ZineVideo from "./ZineVideo";
import ZinePages from "./ZinePages";
import Header from "./Header";
import { motion } from "framer-motion";

function ZineControl() {
  const buttonStyles = {
    height: 70,
    width: 80,
    padding: 20,
    margin: 20
  }

  const buttonText = {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    color: "black"
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <Header/>
      <Link to="/zine/video"><button style={buttonStyles}><span style={buttonText}>video</span></button></Link>
      <Link to="/zine/pages"><button style={buttonStyles}><span style={buttonText}>pages</span></button></Link>
      <br/><br/>
      <Routes>
        <Route path="/video" element={<ZineVideo/>}/>
        <Route path="/pages" element={<ZinePages/>}/>
      </Routes>
    </motion.div>
  );
}

export default ZineControl;