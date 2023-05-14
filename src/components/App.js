import './../App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Header";
import AboutMe from "./AboutMe";
import Home from "./Home";
// import PlayControl from "./PlayControl";
import Browse from "./Browse";
import ZineControl from "./ZineControl";
import Game1Play from './Game1Play';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/about" element={<AboutMe/>}/>
          {/* <Route path="/play/*" element={<PlayControl/>}/> */}
          <Route path="/browse" element={<Browse/>}/>
          <Route path="/zine" element={<ZineControl/>}/>
          <Route path="/play" element={<Game1Play/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;