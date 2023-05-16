import Video from "./../zine/the-wandering-eye-video.mp4";

function ZineVideo() {
  const videoStyles = {
    position: "relative",
    width: "600px",
    height: 0,
    paddingTop: "50.0000%",
    paddingBottom: 0,
    boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
    marginTop: "auto",
    marginBottom: "auto",
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
          src={Video} allowFullScreen="allowFullScreen">
        </iframe>
      </div>
    </>
  );
}

export default ZineVideo;