function ZineVideo() {
  const videoStyles = {
    position: "relative",
    width: "600px",
    height: 0,
    paddingTop: "75.0000%",
    paddingBottom: 0,
    boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
    marginTop: "1.6em",
    marginBottom: "0.9em",
    marginLeft: "auto",
    marginRight: "auto",
    overflow: "hidden",
    borderRadius: "8px",
    willChange: "transform"
  }

  const iFrameStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    border: "none",
    padding: 0,
    margin: 0
  }

  return (
    <>
      <div style={videoStyles}>
        <iframe title="wanderingEye" style={iFrameStyles}
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFiD6UKMzA&#x2F;watch?embed" allowFullScreen="allowFullScreen">
        </iframe>
      </div>
    </>
  );
}

export default ZineVideo;