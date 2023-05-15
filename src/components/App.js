import './../css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from "./AboutMe";
import Home from "./Home";
import Browse from "./Browse";
import ZineControl from "./ZineControl";
import Game1Play from './Game1Play';
import Footer from './Footer';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/about" element={<AboutMe/>}/>
          <Route path="/browse" element={<Browse/>}/>
          <Route path="/zine/*" element={<ZineControl/>}/>
          <Route path="/play" element={<Game1Play/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;