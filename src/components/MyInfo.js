function MyInfo() {
  const linkStyles = {
    margin: 10
  }

  return (
    <>
      <br/><br/>
      <p>
        <a id="contact-links" style={linkStyles} href="https://eluckie.github.io/resume/" target="_blank" rel="noreferrer">virtual resume</a> <a id="contact-links" style={linkStyles} href="https://github.com/eluckie" target="_blank" rel="noreferrer">github profile</a>
      </p>
      <p>
          my name's Luckie<br/>
          originally from California<br/>
          currently in Colorado<br/>
      </p>
    </>
  );
}

export default MyInfo;