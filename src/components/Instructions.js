import PropTypes from "prop-types";

function Instructions(props) {
  const { open, onClose } = props;

  const closeButton = {
    position: "fixed",
    top: 2,
    right: 16,
    cursor: "pointer"
  }

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

  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const step3 = document.getElementById("step3");

  const showStep1 = () => {
    step1.removeAttribute("class");
    step2.setAttribute("class", "hidden");
  }

  const showStep2 = () => {
    step1.setAttribute("class", "hidden");
    step2.removeAttribute("class");
    step3.setAttribute("class", "hidden");
  }

  const showStep3 = () => {
    step2.setAttribute("class", "hidden");
    step3.removeAttribute("class");
  }

  if (!open) {
    return null;
  } else {
    return (
      <div>
        <div className="instructions-container">
          <p style={closeButton} onClick={onClose}>x</p>
          <div className="instructions">
            <div id="step1">
              <p>
                locate the blank tile.<br/>
                click a tile to the
              </p>
              <p>
                left<br/>
                right<br/>
                top<br/>
                or bottom
              </p>
              <p>that's touching the blank tile to swap their places.</p>
              <br/><br/>
              <p onClick={showStep2} style={nextButton}>next</p>
            </div>
            <div id="step2" className="hidden">
              <p>
                pieces will have a faint white dotted outline to<br/>
                indicate when they're in the correct position.
              </p>
              <p>
                continue swapping tiles until the all<br/>
                pieces are in the correct position.
              </p>
              <br/>
              <p>
                <p onClick={showStep1} style={prevButton}>previous</p>
                <p onClick={showStep3} style={nextButton}>next</p>
              </p>
            </div>
            <div id="step3" className="hidden">
              <p>once all tiles are in the correct position,</p>
              <h3>you won!</h3>
              <p>
                your score will be displayed & if you got<br/>
                a high score, you will be able to enter your name!
              </p>
              <p style={{color: "red"}}>high scores coming soon</p>
              <br/>
              <p onClick={showStep2} style={prevButton}>previous</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Instructions.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
}

export default Instructions;