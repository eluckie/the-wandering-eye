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

  return (
    <>
      <div style={divStyles}>
        <Link to="/browse"><img style={photoStyles} src={Logo} alt=""/></Link>
      </div>
    </>
  );
}

export default Home;