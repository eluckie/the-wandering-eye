function Header() {
  const headerWanderingStyles = {
    fontSize: 46,
    padding: 20
  }
  const headerStyles = {
    padding: 10,
    paddingBottom: 4
  }

  return (
    <>
      <h1 style={headerStyles}>t h e <span style={headerWanderingStyles}>w a n d e r i n g</span> e y e</h1>
      <br/>
    </>
  );
}

export default Header;