import Logo from "./../img/Cover.png";
import { Link } from "react-router-dom";

function Home() {
  const photoStyles = {
    height: 680,
    width: 680,
    borderRadius: "50%",
    margin: 10
  }
  const divStyles = {
    textAlign: "center"
  }
  const buttonStyles = {
    padding: 10,
    background: "linear-gradient(to top left, #ccffcc 0%, #ffffcc 76%)",
    width: 65,
    height: 65,
    borderRadius: 50,
    margin: 10
  }

  return (
    <>
      <div style={divStyles}>
        <Link to="/browse"><img style={photoStyles} src={Logo} alt=""/></Link>
        <br/><br/><br/>
        <Link to="/zine"><button style={buttonStyles}>zine</button></Link>
        <Link to="/play"><button style={buttonStyles}>play</button></Link>
        <Link to="/about"><button style={buttonStyles}>about</button></Link>
      </div>
    </>
  );
}

export default Home;