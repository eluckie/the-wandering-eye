import HeaderPhoto from "./../img/header-no-title.png";

function Header() {
    const photoStyles = {
    width: "100%",
    height: 100
  }

  return (
    <>
      <img style={photoStyles} src={HeaderPhoto} alt="the wandering eye logo"/>
      <br/>
      <br/>
    </>
  );
}

export default Header;