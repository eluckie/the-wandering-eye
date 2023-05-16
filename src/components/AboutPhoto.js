import Selfie from "./../img/selfie.jpg";

function AboutPhoto() {
  const eyeShapeStyles = {
    height: "540px",
    width: "540px",
    borderRadius: "99% 0",
    rotate: "45deg",
    margin: "auto"
  }

  const aboutDivStyles = {
    rotate: "-45deg"
  }

  const selfieStyles = {
    width: 270,
    height: 280,
    borderRadius: "50%",
    overflow: "hidden",
    transition: "transform 0.25s"
  }

  return (
    <>
      <div id="eye-div" style={eyeShapeStyles}>
          <br/><br/><br/><br/><br/><br/><br/>
          <div style={aboutDivStyles}>
            <img id="hover" style={selfieStyles} src={Selfie} alt="selfie"/>
          </div>
      </div>
    </>
  );
}

export default AboutPhoto;