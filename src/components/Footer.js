import { Link } from "react-router-dom";

function Footer() {
  const linkStyles = {
    padding: 20,
    display: "inline",
    margin: "auto"
  }

  const divStyles = {
    margin: "auto"
  }

  return (
    <>
      <br/><br/><br/><br/>
      <div style={divStyles}>
        <Link to="/"><p id="page-links" style={linkStyles}>home</p></Link>
        <Link to="/zine"><p id="page-links" style={linkStyles}>zine</p></Link>
        <Link to="/play"><p id="page-links" style={linkStyles}>play</p></Link>
        <Link to="/about"><p id="page-links" style={linkStyles}>about</p></Link>
        <br/><br/><br/>
      </div>
    </>
  );
}

export default Footer;