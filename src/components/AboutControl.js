import AboutPhoto from "./AboutPhoto";
import MyInfo from "./MyInfo";
import PhotoInfo from "./PhotoInfo";
import Banner from "./Banner";
import NavLinks from './NavLinks';
import { useState } from "react";
import { motion } from "framer-motion";

function AboutControl() {
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
        <Banner/>
        <button onClick={showPhotos}><span className="buttonText">photos</span></button>
        <MyInfo/>
        <AboutPhoto/>
        <NavLinks/>
        <Banner/>
      </motion.div>
    );
  } else if (showPhotoInfo) {
    return (
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <Banner/>
        <button onClick={showMe}><span className="buttonText">me</span></button>
        <PhotoInfo/>
        <AboutPhoto/>
        <NavLinks/>
        <Banner/>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        <Banner/>
        <button onClick={showMe}><span className="buttonText">me</span></button>
        <button onClick={showPhotos}><span className="buttonText">photos</span></button>
        <br/><br/>
        <AboutPhoto/>
        <NavLinks/>
        <Banner/>
      </motion.div>
    );
  }
}

export default AboutControl;