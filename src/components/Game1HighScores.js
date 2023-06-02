import PropTypes from "prop-types";
import { useState } from "react";

function PuzzleHighScores(props) {
  const { open, onClose } = props;
  
  const [viewLevel, setViewLevel] = useState(0);

  const level3Scores = [
    {id: 1, name: "E", score: 1},
    {id: 2, name: "L", score: 2},
    {id: 3, name: "I", score: 3},
    {id: 4, name: "Z", score: 4},
    {id: 5, name: "A", score: 5},
    {id: 6, name: "E", score: 1},
    {id: 7, name: "L", score: 2},
    {id: 8, name: "I", score: 0},
    {id: 9, name: "Z", score: 0},
    {id: 10, name: "A", score: 0}
  ];
  const level4Scores = [
    {id: 1, name: "B", score: 6},
    {id: 2, name: "E", score: 7},
    {id: 3, name: "", score: 8},
    {id: 4, name: "H", score: 9},
    {id: 5, name: "", score: 10},
    {id: 6, name: "O", score: 11},
    {id: 7, name: "T", score: 8},
    {id: 8, name: "H", score: 9},
    {id: 9, name: "D", score: 10},
    {id: 10, name: "O", score: 11}
  ];
  const level5Scores = [
    {id: 1, name: "L", score: 12},
    {id: 2, name: "O", score: 13},
    {id: 3, name: "R", score: 14},
    {id: 4, name: "E", score: 0},
    {id: 5, name: "S", score: 16},
    {id: 6, name: "L", score: 0},
    {id: 7, name: "O", score: 13},
    {id: 8, name: "R", score: 0},
    {id: 9, name: "E", score: 15},
    {id: 10, name: "S", score: 16}
  ];
  const level6Scores =[
    {id: 1, name: "L", score: 17},
    {id: 2, name: "U", score: 18},
    {id: 3, name: "C", score: 19},
    {id: 4, name: "", score: 20},
    {id: 5, name: "I", score: 21},
    {id: 6, name: "E", score: 22},
    {id: 7, name: "", score: 19},
    {id: 8, name: "", score: 20},
    {id: 9, name: "I", score: 21},
    {id: 10, name: "E", score: 22}
  ];

  let scoreboard;

  const closeAndReset = () => {
    setViewLevel(0);
    onClose();
  }

  const smallFont = {
    fontSize: 12
  }

    if (viewLevel > 0) {
      if (viewLevel === 3) {
        document.getElementById("scoreboard").style.backgroundColor = "pink";
        scoreboard = 
          level3Scores.map((score) => {
            if (score.score === 0 || score.name === "") {
              if (score.id === 10) {
                return (
                  <p key={score.id}>
                    <span style={smallFont}>... and you!</span>
                  </p>
                );
              } else {
                return <br key={score.id}/>
              }
            } else {
              return (
                <div className="hover" key={score.id}>
                  <p>
                    {score.id}. {score.name} <span style={smallFont}>({score.score} moves)</span>
                  </p>
                </div>
              );
            }
          });
      } else if (viewLevel === 4) {
        document.getElementById("scoreboard").style.backgroundColor = "lightblue";
        scoreboard = level4Scores.map((score) => {
          if (score.score === 0 || score.name === "") {
            if (score.id === 10) {
              return (
                <p key={score.id}>
                  <span style={smallFont}>... and you!</span>
                </p>
              );
            } else {
              return <br/>
            }
          } else {
            return (
              <div className="hover" key={score.id}>
                <p>
                  {score.id}. {score.name} <span style={smallFont}>({score.score} moves)</span>
                </p>
              </div>
            )
          }
        });
      } else if (viewLevel === 5) {
        document.getElementById("scoreboard").style.backgroundColor = "lightgreen";
        scoreboard = level5Scores.map((score) => {
          if (score.score === 0 || score.name === "") {
            if (score.id === 10) {
              return (
                <p key={score.id}>
                  <span style={smallFont}>... and you!</span>
                </p>
              );
            } else {
              return <br/>
            }
          } else {
            return (
              <div className="hover" key={score.id}>
                <p>
                  {score.id}. {score.name} <span style={smallFont}>({score.score} moves)</span>
                </p>
              </div>
            );
          }
        });
      } else {
        document.getElementById("scoreboard").style.backgroundColor = "lightyellow";
        scoreboard = level6Scores.map((score) => {
          if (score.score === 0 || score.name === "") {
            if (score.id === 10) {
              return (
                <p key={score.id}>
                  <span style={smallFont}>... and you!</span>
                </p>
              );
            } else {
              return <br/>
            }
          } else {
            return (
              <div className="hover" key={score.id}>
                <p>
                  {score.id}. {score.name} <span style={smallFont}>({score.score} moves)</span>
                </p>
              </div>
            );
          }
        });
      }
    } else {
      document.getElementById("scoreboard").style.backgroundColor = "white";
      scoreboard =
      <p>select a level to see the top 10 scores.</p>;
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
              <h2>high scores board</h2>
              <button onClick={() => setViewLevel(3)}>3x3</button>
              <button onClick={() => setViewLevel(4)}>4x4</button>
              <button onClick={() => setViewLevel(5)}>5x5</button>
              <button onClick={() => setViewLevel(6)}>6x6</button>
            </div>
            <div id="scoreboard">
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
  onClose: PropTypes.func
}

export default PuzzleHighScores;