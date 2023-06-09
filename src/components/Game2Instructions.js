import PropTypes from "prop-types";
import { useState } from "react";

function SliderInstructions(props) {
  const { open, onClose } = props;

  const nextButton = {
    position: "fixed",
    right: "30%",
    bottom: 8,
    cursor: "pointer"
  }

  const prevButton = {
    position: "fixed",
    left: "30%",
    bottom: 8,
    cursor: "pointer"
  }

  const tinyRedFont = {
    color: "red",
    fontSize: 12
  }

  const tinyFont = {
    fontSize: 12
  }

  const [step1Visible, setStep1Visible] = useState(true);
  const [step2Visible, setStep2Visible] = useState(false);
  const [step3Visible, setStep3Visible] = useState(false);
  const [step4Visible, setStep4Visible] = useState(false);

  const showStep1 = () => {
    const step1 = document.getElementById("step1");
    step1.removeAttribute("class");
    setStep1Visible(!step1Visible);
    hideStep2();
    hideStep3();
    hideStep4();
  }

  const hideStep1 = () => {
    const step1 = document.getElementById("step1");
    step1.setAttribute("class", "hidden");
    setStep1Visible(!step1Visible);
  }

  const showStep2 = () => {
    const step2 = document.getElementById("step2");
    step2.removeAttribute("class");
    setStep2Visible(!step2Visible);
    hideStep1();
    hideStep3();
    hideStep4();
  }

  const hideStep2 = () => {
    const step2 = document.getElementById("step2");
    step2.setAttribute("class", "hidden");
    setStep2Visible(!step2Visible);
  }

  const showStep3 = () => {
    const step3 = document.getElementById("step3");
    step3.removeAttribute("class");
    setStep3Visible(!step3Visible);
    hideStep1();
    hideStep2();
    hideStep4();
  }

  const hideStep3 = () => {
    const step3 = document.getElementById("step3");
    step3.setAttribute("class", "hidden");
    setStep3Visible(!step3Visible);
  }

  const showStep4 = () => {
    const step4 = document.getElementById("step4");
    step4.removeAttribute("class");
    setStep4Visible(!step4Visible);
    hideStep1();
    hideStep2();
    hideStep3();
  }

  const hideStep4 = () => {
    const step4 = document.getElementById("step4");
    step4.setAttribute("class", "hidden");
    setStep4Visible(!step4Visible);
  }

  if (!open) {
    return null;
  } else {
    return (
      <>
        <div className="modal-container instructions">
          <p className="closeBtn" onClick={onClose}>x</p>
          <div className="modal-content">
            <div id="step1">
              <h2>slider puzzle instructions</h2>
              <br/>
              <p>
                click a color on the color palette to begin a game.<br/>
                difficulty is randomized upon game start.
              </p>
              <p>puzzle difficulty can be</p>
              <p>
                3x3<br/>
                4x4<br/>
                <span style={tinyFont}>or</span><br/>
                5x5.
              </p>
              <p style={tinyRedFont}>
                if you want a different size, click the color palette<br/>
                again to re-randomize the difficulty.
              </p>
              <p className="hover" onClick={showStep2} style={nextButton}>next</p>
            </div>
            <div id="step2" className="hidden">
              <h2>slider puzzle instructions</h2>
              <br/>
              <p>
                locate the blank tile.<br/>
                click a tile to the
              </p>
              <p>
                left<br/>
                right<br/>
                top<br/>
                <span style={tinyFont}>or</span><br/>
                bottom
              </p>
              <p>that's touching the blank tile to swap their places.</p>
              <span>
                <p className="hover" onClick={showStep1} style={prevButton}>previous</p>
                <p className="hover" onClick={showStep3} style={nextButton}>next</p>
              </span>
            </div>
            <div id="step3" className="hidden">
              <h2>slider puzzle instructions</h2>
              <br/>
              <p>
                tiles will have a faint white dotted outline to<br/>
                indicate when they're in the correct position.
              </p>
              <p>
                continue swapping tiles until they<br/>
                are all in the correct position.*
              </p>
              <br/>
              <p style={tinyRedFont}>*the correct position for the blank tile is<br/><em>always</em> the bottom row, right corner.</p>
              <p className="hover" onClick={showStep2} style={prevButton}>previous</p>
              <p className="hover" onClick={showStep4} style={nextButton}>next</p>
            </div>
            <div id="step4" className="hidden">
              <h2>slider puzzle instructions</h2>
              <br/>
              <p>once all tiles are in the correct position,</p>
              <h3>you won!</h3>
              <p>if you get a high score, you will be able to enter your name.*</p>
              <br/>
              <p style={tinyRedFont}>*scoreboard coming soon.</p>
              <p className="hover" onClick={showStep3} style={prevButton}>previous</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

SliderInstructions.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
}

export default SliderInstructions;