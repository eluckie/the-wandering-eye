import { Link } from "react-router-dom";

function Footer() {
  const divStyles = {
    margin: "auto"
  }

  return (
    <>
      <br/><br/><br/><br/>
      <div style={divStyles}>
        <Link to="/"><button>home</button></Link>
        <Link to="/zine"><button>zine</button></Link>
        <Link to="/play"><button>play</button></Link>
        <Link to="/about"><button>about</button></Link>
        <br/><br/><br/>
      </div>
    </>
  );
}

export default Footer;