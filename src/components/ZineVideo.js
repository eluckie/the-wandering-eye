import Video from "./../zine/the-wandering-eye-video.mp4";
import Banner from "./Banner";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ZineVideo() {
  const buttonText = {
    fontWeight: "bold",
    fontSize: 16,
    color: "black"
  }

  const videoStyles = {
    position: "relative",
    width: "600px",
    height: 0,
    paddingTop: "50.0000%",
    paddingBottom: 0,
    boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    overflow: "hidden",
    borderRadius: "8px",
    willChange: "transform"
  }

  const iFrameStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    border: "none",
    padding: 0,
    margin: 0
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <Banner/>
      <Link to="/zine/pages"><button><span style={buttonText}>pages</span></button></Link>
      <br/><br/>
      <div style={videoStyles}>
        <iframe title="wanderingEye" style={iFrameStyles}
          src={Video} allowFullScreen="allowFullScreen">
        </iframe>
      </div>
      <NavLinks/>
      <Banner/>
    </motion.div>
  );
}

export default ZineVideo;