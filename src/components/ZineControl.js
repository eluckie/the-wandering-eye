import { Link} from "react-router-dom";
import Banner from "./Banner";
import NavLinks from './NavLinks';
import { motion } from "framer-motion";

function ZineControl() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <Banner/>
      <br/><br/>
      <h2>choose your experience</h2>
      <br/><br/>
      <Link to="/zine/video"><button><span className="buttonText">video</span></button></Link>
      <Link to="/zine/pages"><button><span className="buttonText">pages</span></button></Link>
      <br/><br/><br/>
      <NavLinks/>
      <Banner/>
    </motion.div>
  );
}

export default ZineControl;