import { Link } from "react-router-dom";

function Browse() {
  const divStyles = {
    textAlign: "center",
    border: "4px solid black",
    width: 400,
    margin: "auto"
  }

  const linkStyles = {
    textAlign: "center"
  }
  
  const headerStyles = {
    color: "red"
  }

  return (
    <>
      <div style={divStyles}>
        <h1 style={headerStyles}>PAGE UNDER CONSTRUCTION</h1>
        <h3>browse feature coming soon</h3>
      </div>
      <br/><br/><br/><br/>
      <Link to="/"><p style={linkStyles}>go home</p></Link>
    </>
  );
}

export default Browse;