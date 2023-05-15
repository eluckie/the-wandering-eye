import { Link, Routes, Route } from "react-router-dom";
import ZineVideo from "./ZineVideo";
import ZinePages from "./ZinePages";
import Header from "./Header";

function ZineControl() {
  const buttonStyles = {
    height: 80,
    width: 80,
    borderRadius: 50,
    padding: 20,
    margin: 20
  }

  return (
    <>
      <Header/>
      <Link to="/zine/video"><button style={buttonStyles}>video</button></Link>
      <Link to="/zine/pages"><button style={buttonStyles}>pages</button></Link>
      <Routes>
        <Route path="/video" element={<ZineVideo/>}/>
        <Route path="/pages" element={<ZinePages/>}/>
      </Routes>
    </>
  );
}

export default ZineControl;