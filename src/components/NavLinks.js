import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <>
      <br/><br/><br/>
      <div className="center">
        <Link to="/"><button>home</button></Link>
        <Link to="/zine"><button>zine</button></Link>
        <Link to="/play"><button>play</button></Link>
        <Link to="/about"><button>about</button></Link>
        <br/><br/><br/>
      </div>
    </>
  );
}

export default NavLinks;