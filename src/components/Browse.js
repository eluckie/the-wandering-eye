import Header from "./Header";

function Browse() {
  const divStyles = {
    textAlign: "center",
    border: "4px solid black",
    width: 400,
    margin: "auto"
  }
  
  const headerStyles = {
    color: "red"
  }

  return (
    <>
      <Header/>
      <br/><br/>
      <div style={divStyles}>
        <h1 style={headerStyles}>PAGE UNDER CONSTRUCTION</h1>
        <h3>browse feature coming soon</h3>
      </div>
    </>
  );
}

export default Browse;