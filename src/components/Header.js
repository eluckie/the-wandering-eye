import HeaderPhoto from "./../img/header.png";

function Header() {
    const photoStyles = {
    borderRadius: "0.7rem"
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