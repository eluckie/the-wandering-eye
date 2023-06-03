import PropTypes from "prop-types";
import { useState } from "react";
import Level3 from "./../img/3x3.jpg";
import Level4 from "./../img/4x4.jpg";
import Level5 from "./../img/5x5.jpg";
import Level6 from "./../img/6x6.jpg";

function PuzzleHighScores(props) {
  const { open, onClose, level3Scores, level4Scores, level5Scores, level6Scores } = props;
  
  const [viewLevel, setViewLevel] = useState(0);

  let scoreboard;

  const closeAndReset = () => {
    setViewLevel(0);
    onClose();
  }

  const smallFont = {
    fontSize: 12
  }

  let divStyle = {
    backgroundColor: "white",
    backgroundSize: "160%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: 300
  }

  const selectStyles = {
    position: "fixed",
    top: "55%",
    left: "25%"
  }

  if (viewLevel > 0) {
    if (viewLevel === 3) {
      divStyle.backgroundImage = `url('${Level3}')`;
      if (level3Scores[0].name === "PLACEHOLDER") {
        scoreboard = 
          <>
            <br/><br/>
            <h3>no high scores yet.</h3>
            <p style={selectStyles}>
              play a game & you'll be the first!
            </p>
          </>;
      } else {
        scoreboard = 
          level3Scores.map((score) => {
            return (
              <div className="hover" key={score.key}>
                <p>
                  {score.id}. {score.name} <span style={smallFont}>({score.score} moves)</span>
                </p>
              </div>
            );
          });
        }
      } else if (viewLevel === 4) {
        divStyle.backgroundImage = `url('${Level4}')`;
        if (level4Scores[0].name === "PLACEHOLDER") {
          scoreboard = 
            <>
              <br/><br/>
              <h3>no high scores yet.</h3>
              <p style={selectStyles}>
                play a game & you'll be the first!
              </p>
            </>;
        } else {
          scoreboard = level4Scores.map((score) => {
            return (
              <div className="hover" key={score.id}>
                <p>
                  {score.id}. {score.name} <span style={smallFont}>({score.score} moves)</span>
                </p>
              </div>
            )
          });
        }
      } else if (viewLevel === 5) {
        divStyle.backgroundImage = `url('${Level5}')`;
        if (level5Scores[0].name === "PLACEHOLDER") {
          scoreboard = 
            <>
              <br/><br/>
              <h3>no high scores yet.</h3>
              <p style={selectStyles}>
                play a game & you'll be the first!
              </p>
            </>;
        } else {
          scoreboard = level5Scores.map((score) => {
            return (
                <div className="hover" key={score.id}>
                <p>
                  {score.id}. {score.name} <span style={smallFont}>({score.score} moves)</span>
                </p>
              </div>
            );
          });
        }
      } else {
        divStyle.backgroundImage = `url('${Level6}')`;
        if (level6Scores[0].name === "PLACEHOLDER") {
          scoreboard = 
            <>
              <br/><br/>
              <h3>no high scores yet.</h3>
              <p style={selectStyles}>
                play a game & you'll be the first!
              </p>
            </>;
        } else {
          scoreboard = level6Scores.map((score) => {
            return (
              <div className="hover" key={score.id}>
                <p>
                  {score.id}. {score.name} <span style={smallFont}>({score.score} moves)</span>
                </p>
              </div>
            );
          });
        }
      }
    } else {
      scoreboard =
        <p style={selectStyles}>select a level to see the top 10 scores.</p>;
    }

  if (!open) {
    return null;
  } else {
    return (
      <>
        <div className="modal-container highscores">
          <p className="closeBtn" onClick={closeAndReset}>x</p>
          <div className="modal-content">
            <div>
              <h2>puzzle swap high scores</h2>
              <button onClick={() => setViewLevel(3)}>3x3</button>
              <button onClick={() => setViewLevel(4)}>4x4</button>
              <button onClick={() => setViewLevel(5)}>5x5</button>
              <button onClick={() => setViewLevel(6)}>6x6</button>
            </div>
            <div style={divStyle}>
              {scoreboard}
            </div>
          </div>
        </div>
      </>
    );
  }
}

PuzzleHighScores.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  level3Scores: PropTypes.array,
  level4Scores: PropTypes.array,
  level5Scores: PropTypes.array,
  level6Scores: PropTypes.array
}

export default PuzzleHighScores;