import Selfie from "./../img/selfie.jpg";

function AboutPhoto() {
  const eyeShapeStyles = {
    border: "2px solid black",
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
    border: "2px solid black"
  }

  return (
    <>
      <div id="eye-div" style={eyeShapeStyles}>
          <br/><br/><br/><br/><br/><br/><br/>
          <div style={aboutDivStyles}>
            <img style={selfieStyles} src={Selfie} alt="selfie"/>
          </div>
      </div>
    </>
  );
}

export default AboutPhoto;