function PhotoInfo() {
  const divStyles = {
    border: "2px solid black",
    width: 400,
    margin: "auto",
    padding: 10,
    borderRadius: "0.7rem"
  }

  return (
    <>
    <div style={divStyles}>
        <p>
            all photos shot with an iPhone 11<br/>
            all shot by me<br/>
            hashtag what filter
        </p>
      </div>
    </>
  );
}

export default PhotoInfo;