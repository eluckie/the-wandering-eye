import { Route, Routes, useLocation } from "react-router";
import AboutControl from "./AboutControl";
import Home from "./Home";
import Browse from "./Browse";
import ZineControl from "./ZineControl";
import Game1Play from './Game1Play';
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/about" element={<AboutControl/>}/>
            <Route path="/browse" element={<Browse/>}/>
            <Route path="/zine/*" element={<ZineControl/>}/>
            <Route path="/play" element={<Game1Play/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;