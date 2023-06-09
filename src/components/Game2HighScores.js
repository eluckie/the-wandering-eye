import PropTypes from "prop-types";

function SliderHighScores(props) {
  const { open, onClose } = props;

  if (!open) {
    return null;
  } else {
    return (
      <>
        <div className="modal-container highscores">
          <p className="closeBtn" onClick={onClose}>x</p>
          <div className="modal-content">
            <div>
              <h2>high scores board</h2>
              <br/><br/><br/><br/><br/>
              <p style={{color: "red"}}>coming soon</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

SliderHighScores.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
}

export default SliderHighScores;