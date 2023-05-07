import Logo from "./../img/Cover.png";
import './../App.css';

function App() {
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
        <img style={photoStyles} src={Logo} alt=""/>
      </div>
    </>
  );
}

export default App;
