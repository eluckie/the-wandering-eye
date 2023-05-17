import BottomBorder from "./../img/header-no-title.png";

function Footer() {
    const photoStyles = {
    width: "100%",
    height: 100
  }

  return (
    <>
      <img style={photoStyles} src={BottomBorder} alt="the wandering eye logo"/>
      <br/>
      <br/>
    </>
  );
}

export default Footer;