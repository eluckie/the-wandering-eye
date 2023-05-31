import Directions from "./../zine/Directions.png";
import Cover from "./../zine/Cover.png";
import Contents from "./../zine/Contents.png";
import Page2 from "./../zine/2.png";
import Page3 from "./../zine/3.png";
import Page4 from "./../zine/4.png";
import Page5 from "./../zine/5.png";
import Page6 from "./../zine/6.png";
import Page7 from "./../zine/7.png";
import Page8 from "./../zine/8.png";
import Page9 from "./../zine/9.png";
import Page10 from "./../zine/10.png";
import Page11 from "./../zine/11.png";
import Page12 from "./../zine/12.png";
import Page13 from "./../zine/13.png";
import Page14 from "./../zine/14.png";
import Page15 from "./../zine/15.png";
import Page16 from "./../zine/16.png";
import Page17 from "./../zine/17.png";
import Page18 from "./../zine/18.png";
import Page19 from "./../zine/19.png";
import Page20 from "./../zine/20.png";
import Page21 from "./../zine/21.png";
import Page22 from "./../zine/22.png";
import Page23 from "./../zine/23.png";
import Page24 from "./../zine/24.png";
import Page25 from "./../zine/25.png";
import Page26 from "./../zine/26.png";
import Page27 from "./../zine/27.png";
import Page28 from "./../zine/28.png";
import Page29 from "./../zine/29.png";
import Page30 from "./../zine/30.png";
import Thanks from "./../zine/Thanks.png";
import Blank from "./../zine/blank.png";
import HTMLFlipBook from "react-pageflip";
import Banner from "./Banner";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ZinePages() {
  const pageStyles = {
    width: 500,
    height: 500
  }

  const bookStyles = {
    margin: "auto",
    cursor: "pointer"
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <Banner/>
      <Link to="/zine/video"><button><span className="buttonText">video</span></button></Link>
      <br/><br/>
      <HTMLFlipBook style={bookStyles} width={500} height={500}>
        <div><img style={pageStyles} src={Directions} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Cover} alt="the wandering eye zine cover"/></div>
        <div className="zinePage"><img style={pageStyles} src={Page2} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Contents} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Blank} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page3} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page4} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page5} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page6} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page7} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page8} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page9} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page10} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page11} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page12} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page13} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page14} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page15} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page16} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page17} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page18} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page19} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page20} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page21} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page22} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page23} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page24} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page25} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page26} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page27} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page28} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page29} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Page30} alt=""/></div>
        <div className="zinePage"><img style={pageStyles} src={Thanks} alt=""/></div>
      </HTMLFlipBook>
      <NavLinks/>
      <Banner/>
    </motion.div>
  );
}

export default ZinePages;