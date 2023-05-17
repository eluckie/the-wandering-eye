function MyInfo() {
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
          <a id="contact-links" href="https://eluckie.github.io/resume/" target="_blank" rel="noreferrer">virtual resume</a> <a id="contact-links" href="https://github.com/eluckie" target="_blank" rel="noreferrer">github profile</a>
        </p>
        <h1>my name's Luckie</h1>
        <h4>
          originally from California<br/>
          currently in Colorado
        </h4>
        <h5 id="accent">2022 changed my life.</h5>
        <p>
          I left the only home I'd ever known to travel all over the country, mostly alone. I discovered multiple new interests including traveling, landscape photography, and web development. This project marks the beginning of bringing all of my newfound passions together.
        </p>
      </div>
    </>
  );
}

export default MyInfo;