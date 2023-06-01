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
        <div><img style={pageStyles} src={Directions} alt="blank page with instructions: click to flip"/></div>
        <div id="zinePage"><img style={pageStyles} src={Cover} alt="the wandering eye zine cover"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page2} alt="what is this? 2022 as seen through my eyes. a year of travel and natural beauty"/></div>
        <div id="zinePage"><img style={pageStyles} src={Contents} alt="table of contents with each month stating what place was visited each month. January: Pismo Beach, CA, Southern California. February: Monterey, CA, Seattle, WA. March: Las Vegas, NV, Hoover Dam, Grand Canyon West. April: Chattanooga, TN. May: Dayton, OH, Columbus, OH. June: Denver, CO. July: Road trip! Bay Area to Ventura CA to Vegas to Grand Canyon East to New Mexico. August: Bay Area, Portland, OR. September: Mini road trip! Cleveland, OH through Pennsylvania to Niagara Falls in New York. October: Rocky Mountain National Park. November: Chicago, IL. December: O'ahu, HI"/></div>
        <div id="zinePage"><img style={pageStyles} src={Blank} alt="blank page"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page3} alt="January page decorated with multiple layered images and clip-art, including an excerpt from the poem Morning by Paul Laurence Dunbar that says 'the wind is hiding in the trees, a sighing, soothing, laughing tease, until the rose says 'kiss me, please' 'tis morning, 'tis morning'"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page4} alt="multiple layered images taken in Pismo Beach, CA"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page5} alt="multiple layered images taken in Southern California"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page6} alt="February page decorated with multiple layered images and clip-art, including a quote from Leo Solado: 'And if you ever get to missing my embrace simply step out, and feel the comfort of the sun's rays'"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page7} alt="multiple layered images taken in Monterey, CA"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page8} alt="multiple layered images taken in Seattle, WA"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page9} alt="March page decorated with multiple layered images and clip-art, including a quote that says 'I may be in this world but I am not of this world'"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page10} alt="multiple layered images taken in Nevada"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page11} alt="multiple layered images taken in Arizona"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page12} alt="April page decorated with multiple layered images and clip-art, including a quote that says 'I know you never intended to be in this world, but you're in it all the same. So why not get started immediately'"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page13} alt="multiple layered images taken in Tennessee"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page14} alt="May page decorated with multiple layered images and clip-art, including a quote from a personal message I received that says 'You glow like the sun in the afternoon, warming up our skin trees and hearts'"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page15} alt="multiple layered images taken in Ohio"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page16} alt="June page decorated with multiple layered images and clip-art, including a quote that says 'the mountains are calling and I must go'"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page17} alt="multiple layered images taken in Denver"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page18} alt="July page decorated with multiple layered images and clip-art, including a quote found on a rock during my travels in July that says 'through nature we experience the fundamental interconnectedness of all things'"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page19} alt="multiple layered images taken in California, Nevada, Arizona, and New Mexico"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page20} alt="August page decorated with multiple layered images and clip-art, including a quote that says 'the time is always right to do right' and a happy birthday banner for myself"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page21} alt="multiple layered images taken in California and Oregon"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page22} alt="September page decorated with multiple layered images and clip-art, including a quote from a personal message I received that says 'how can on describe love. you're like the living embodiment of it'"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page23} alt="multiple layered images taken in Ohio to New York"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page24} alt="October page decorated with multiple layered images and clip-art, including a quote that says 'yes, I dream of a better world. should I dream of a worse? yes, I desire a wider world. should I desire a narrower?'"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page25} alt="multiple layered images taken in Colorado"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page26} alt="November page decorated with multiple layered images and clip-art, including a quote that says 'tall grass, slippery mud, and a calm place to feed my mind'"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page27} alt="multiple layered images taken in Chicago"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page28} alt="December page decorated with multiple layered images and clip-art, including a quote that says 'the aficionado of adventure, the virtuoso of vacation, is not home'"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page29} alt="multiple layered images taken in O'ahu"/></div>
        <div id="zinePage"><img style={pageStyles} src={Page30} alt="multiple layered images and clip-art saying goodbye to 2022. includes a quote that says 'it is okay to gasp at the sunset every single evening like it is the first sunset you have ever seen. it is okay to take photos of everything you find pretty. it is okay to say that the sunlight looks like honey, that the world looks like a dream today. it is okay to take this life and weave it golden. you have beautiful eyes through which everything sparkles and nothing goes unnoticed and you are so loved for that.'"/></div>
        <div id="zinePage"><img style={pageStyles} src={Thanks} alt="last page. a simple 'thank you!' decorated with pastel shaded clip-art"/></div>
      </HTMLFlipBook>
      <NavLinks/>
      <Banner/>
    </motion.div>
  );
}

export default ZinePages;