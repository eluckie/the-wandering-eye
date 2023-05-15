import AboutPhoto from "./AboutPhoto";
import MyInfo from "./MyInfo";
import PhotoInfo from "./PhotoInfo";
import Header from "./Header";
import { useState } from "react";

function AboutMe() {
  const buttonStyles = {
    height: 80,
    width: 80,
    borderRadius: "50%",
    margin: 10
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
      <>
        <Header/>
        <button onClick={showPhotos} style={buttonStyles}>my photos</button>
        <MyInfo/>
        <AboutPhoto/>
      </>
    );
  } else if (showPhotoInfo) {
    return (
      <>
        <Header/>
        <button onClick={showMe} style={buttonStyles}>me</button>
        <PhotoInfo/>
        <AboutPhoto/>
      </>
    );
  } else {
    return (
      <>
        <Header/>
        <button onClick={showMe} style={buttonStyles}>me</button>
        <button onClick={showPhotos} style={buttonStyles}>my photos</button>
        <AboutPhoto/>
      </>
    );
  }
}

export default AboutMe;