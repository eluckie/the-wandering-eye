import { Link, Routes, Route } from "react-router-dom";
import ZineVideo from "./ZineVideo";
import ZinePages from "./ZinePages";
import Header from "./Header";
import NavLinks from './NavLinks';
import Footer from './Footer';
import { motion } from "framer-motion";

function ZineControl() {
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
      <Header/>
      <br/><br/>
      <h2>choose your experience</h2>
      <br/><br/>
      <Link to="/zine/video"><button><span style={buttonText}>video</span></button></Link>
      <Link to="/zine/pages"><button><span style={buttonText}>pages</span></button></Link>
      <br/><br/><br/>
      <Routes>
        <Route path="/video" element={<ZineVideo/>}/>
        <Route path="/pages" element={<ZinePages/>}/>
      </Routes>
      <NavLinks/>
      <Footer/>
    </motion.div>
  );
}

export default ZineControl;