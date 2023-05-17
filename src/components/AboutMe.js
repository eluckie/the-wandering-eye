import AboutPhoto from "./AboutPhoto";
import MyInfo from "./MyInfo";
import PhotoInfo from "./PhotoInfo";
import Header from "./Header";
import NavLinks from './NavLinks';
import Footer from './Footer';
import { useState } from "react";
import { motion } from "framer-motion";

function AboutMe() {
  const buttonText = {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    color: "black"
  }

  const [showMyInfo, setShowMyInfo] = useState(false);
  const [showPhotoInfo, setShowPhotoInfo] = useState(false);
  const [ready, setReady] = useState(true);

  const showMe = () => {
    setReady(false);
    setShowMyInfo(true);
    setShowPhotoInfo(false);
    setReady(true);
  }

  const showPhotos = () => {
    setReady(false);
    setShowMyInfo(false);
    setShowPhotoInfo(true);
    setReady(true);
  }

  if (!ready) {
    return <h1>... loading ...</h1>
  } else if (showMyInfo) {
    return (
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <Header/>
        <button onClick={showPhotos}><span style={buttonText}>photos</span></button>
        <MyInfo/>
        <AboutPhoto/>
        <NavLinks/>
        <Footer/>
      </motion.div>
    );
  } else if (showPhotoInfo) {
    return (
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <Header/>
        <button onClick={showMe}><span style={buttonText}>me</span></button>
        <PhotoInfo/>
        <AboutPhoto/>
        <NavLinks/>
        <Footer/>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        <Header/>
        <button onClick={showMe}><span style={buttonText}>me</span></button>
        <button onClick={showPhotos}><span style={buttonText}>photos</span></button>
        <br/><br/>
        <AboutPhoto/>
        <NavLinks/>
        <Footer/>
      </motion.div>
    );
  }
}

export default AboutMe;