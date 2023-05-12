import { Link } from "react-router-dom";
import PlaceholderImg from "./../img/placeholder.png";

function AboutMe() {
  const divStyles = {
    textAlign: "center",
    width: 600,
    height: 600,
    border: "2px black solid",
    borderRadius: "50%",
    margin: "auto"
  }

  const photoInfoDivStyles = {
    textAlign: "center",
    width: 300,
    height: 300,
    border: "2px black solid",
    borderRadius: 50,
    padding: 20,
    float: "right",
    margin: 20
  }

  const placeholderPhotoStyles = {
    width: 280
  }
  
  const linkStyles = {
    padding: 20,
    display: "inline",
    margin: "auto"
  }

  return (
    <>
      <div style={photoInfoDivStyles}>
        <h4>about my photos</h4>
        <hr/>
        <p>
          all photos shot with an iphone 11<br/><br/>
          hashtag what filter
        </p>
      </div>
      <div style={divStyles}>
        <br/><br/>
        <img style={placeholderPhotoStyles} src={PlaceholderImg} alt=""/>
        <br/><br/>
        <h2>my name's luckie</h2>
        <p>and this is just a little bit of information about me</p>
      </div>
      <br/><br/>
      <div>
        <Link to="/"><p style={linkStyles}>home</p></Link>
        <Link to="/zine"><p style={linkStyles}>zine</p></Link>
        <Link to="/play"><p style={linkStyles}>play</p></Link>
      </div>
      <br/>
    </>
  );
}

export default AboutMe;