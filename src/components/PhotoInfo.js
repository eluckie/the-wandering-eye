function PhotoInfo() {
  const divStyles = {
    border: "2px solid black",
    width: 400,
    margin: "auto",
    padding: 10,
    borderRadius: "0.7rem"
  }

  const listStyles = {
    listStyle: "none",
    paddingLeft: 0
  }

  const showInstaHandle = () => {
    document.getElementById("contact-links").innerText = "@yellowpistols on IG";
  }

  const hideInstaHandle = () => {
    document.getElementById("contact-links").innerText = "see more photos"
  }

  return (
    <>
      <br/><br/>
      <div style={divStyles}>
        <br/>
        <span id="contact-links" onMouseOver={showInstaHandle} onMouseOut={hideInstaHandle}>see more photos</span>
        <br/><br/>
        <h3>all photos shot by me with an iPhone 12</h3>
        <p>
          Among these photos you'll find my daily travels as well as actual intended trips. The locations may vary, but some of the states you'll see are:</p>
          <ul style={listStyles}>
            <li>California</li>
            <li>Colorado</li>
            <li>Nevada</li>
            <li>Arizona</li>
            <li>Ohio</li>
            <li>Illinois</li>
            <li>New York</li>
            <li>Tennessee</li>
            <li>New Mexico</li>
            <li>and more!</li>
          </ul>
        <h4>hashtag what filter</h4>
      </div>
    </>
  );
}

export default PhotoInfo;