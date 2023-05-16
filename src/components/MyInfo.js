function MyInfo() {
  const linkStyles = {
    margin: 20
  }

  const divStyles = {
    border: "2px solid black",
    width: 400,
    margin: "auto",
    padding: 10,
    borderRadius: "0.7rem"
  }

  return (
    <>
      <br/><br/>
      <div style={divStyles}>
        <p>
          <a id="contact-links" style={linkStyles} href="https://eluckie.github.io/resume/" target="_blank" rel="noreferrer">virtual resume</a> <a id="contact-links" style={linkStyles} href="https://github.com/eluckie" target="_blank" rel="noreferrer">github profile</a>
        </p>
        <h3>my name's Luckie</h3>
        <p>
          originally from California<br/>
          currently in Colorado<br/>
        </p>
      </div>
    </>
  );
}

export default MyInfo;