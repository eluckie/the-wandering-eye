import { Link, Routes, Route } from "react-router-dom";
import ZineVideo from "./ZineVideo";
import ZinePages from "./ZinePages";
import Header from "./Header";
import { motion } from "framer-motion";

function ZineControl() {
  const buttonStyles = {
    height: 80,
    width: 80,
    borderRadius: 50,
    padding: 20,
    margin: 20
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <Header/>
      <Link to="/zine/video"><button style={buttonStyles}>video</button></Link>
      <Link to="/zine/pages"><button style={buttonStyles}>pages</button></Link>
      <br/><br/>
      <Routes>
        <Route path="/video" element={<ZineVideo/>}/>
        <Route path="/pages" element={<ZinePages/>}/>
      </Routes>
    </motion.div>
  );
}

export default ZineControl;