import BannerPhoto from "./../img/banner.png";

function Banner() {
    const photoStyles = {
    width: "100%",
    height: 100
  }

  return (
    <>
      <img style={photoStyles} src={BannerPhoto} alt="the wandering eye banner"/>
      <br/>
      <br/>
    </>
  );
}

export default Banner;