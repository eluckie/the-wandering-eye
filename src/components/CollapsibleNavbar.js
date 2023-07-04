import { Link } from "react-router-dom";

function CollapsibleNavbar() {
  return (
    <div className="navbar-container">
      <div className="main">
        <input type="checkbox" id="check"/>
        <label className="check-label" htmlFor="check">
          <i className="fa fa-bars"/>
          <i className="fa fa-remove"/>
        </label>
        <div className="box"></div>

        <div className="row">
          <div className="item">
            <Link to="/"><h3>home</h3></Link>
          </div>
          <div className="item">
            <Link to="/browse"><h3>browse </h3></Link>
          </div>
          <div className="item">
            <Link to="/zine"><h3> zine</h3></Link>
          </div>
          <div className="item">
            <Link to="/play"><h3>play</h3></Link>
          </div>
          <div className="item">
            <Link to="/about"><h3>about</h3></Link>
          </div>
          <div className="item">
            <Link to="/zine/video"><p>video zine</p></Link>
          </div>
          <div className="item">
            <Link to="/zine/pages"><p>zine pages</p></Link>
          </div>
          <div className="item">
            <Link to="/play/puzzle"><p>puzzle game</p></Link>
          </div>
          <div className="item">
            <Link to="/play/slider"><p>slider game</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollapsibleNavbar;