import PropTypes from "prop-types";
import { connect } from "react-redux";
import Instructions from "./Game1Instructions";
import HighScores from "./Game1HighScores";
import { useState } from "react";
import NewHighScore from "./NewHighScore";

// implement useEffect ? [levelScores]

function GameStatus(props) {
  const { gameComplete, turnNo, imageNumber, difficulty } = props;

  const score = turnNo - 1;

  const [openInstructions, setOpenInstructions] = useState(false);
  const [openHighScores, setOpenHighScores] = useState(false);
  const [level3Scores, setLevel3Scores] = useState([{key: 0, id: 0, name: "PLACEHOLDER", score: 1000}]);
  const [level4Scores, setLevel4Scores] = useState([{key: 0, id: 0, name: "PLACEHOLDER", score: 99999}]);
  const [level5Scores, setLevel5Scores] = useState([{key: 0, id: 0, name: "PLACEHOLDER", score: 99999}]);
  const [level6Scores, setLevel6Scores] = useState([{key: 0, id: 0, name: "PLACEHOLDER", score: 99999}]);

  const firstScoreMsg = <h3>your {score} moves got the first high score for {difficulty}x{difficulty}!</h3>

  const newScoreMsg = <h3>your {score} moves got a new high score for {difficulty}x{difficulty}</h3>

  const handleAddingNewScore = (newAddition) => {
    const nameToAdd = newAddition.name;
    const scoreToAdd = newAddition.score;
    console.log("newAddition: ", newAddition);

    if (difficulty === 3) {
      let newLevel3Scores = [...level3Scores];
      console.log("level3Scores: ", level3Scores);

      if (scoreToAdd < newLevel3Scores[newLevel3Scores.length - 1].score) {
        for (let i = 0; i < newLevel3Scores.length; i++) {
          let currentObject = newLevel3Scores[i];
          let currentIndex = currentObject.key;
          console.log("currentObject: ", currentObject);

          if (scoreToAdd < currentObject.score && newLevel3Scores.length > 0) {
            newLevel3Scores.push({
              key: currentIndex,
              id: currentIndex,
              name: nameToAdd,
              score: scoreToAdd
            });
          } else {
            newLevel3Scores.push({
              key: currentIndex,
              id: currentIndex,
              name: currentObject.name,
              score: currentObject.score
            });
          }
          console.log("newLevel3Scores: ", newLevel3Scores);
          return newLevel3Scores;
        }
        setLevel3Scores(newLevel3Scores);
      }
    } else {
      let newLevel4Scores = [];
      if (scoreToAdd > level4Scores[level4Scores.length - 1].score) {
        for (let i = 1; i < level4Scores.length; i++) {
          let currentObject = level4Scores[i];
          if (scoreToAdd > currentObject.score) {
            newLevel4Scores.concat({
              key: newLevel4Scores[i],
              id: newLevel4Scores[i],
              name: currentObject.name,
              score: currentObject.score
            });
          } else {
            newLevel4Scores.concat({
              key: newLevel4Scores[i],
              id: newLevel4Scores[i],
              name: nameToAdd,
              score: scoreToAdd
            });
          }
        }
        console.log("newLevel4Scores: ", newLevel4Scores);
        setLevel4Scores(newLevel4Scores);
      }
    }
  }

  if (gameComplete) {
    if (difficulty === 3) {
      if (level3Scores.length === 0) {
        return (
          <>
            {firstScoreMsg}
            <NewHighScore
              score={score}
              addNewScore={handleAddingNewScore}/>
          </>
        );
      } else if (score < level3Scores[level3Scores.length - 1].score) {
        return (
          <>
            {newScoreMsg}
            <NewHighScore
              score={score}
              addNewScore={handleAddingNewScore}/>
          </>
        );
      }
    } else if (difficulty === 4) {
      if (level4Scores.length === 0) {
        return (
          <>
            {firstScoreMsg}
          </>
        );
      } else if (score < level4Scores[level4Scores.length - 1].score) {
        return (
          <>
            {newScoreMsg}
          </>
        );
      }
    } else if (difficulty === 5) {
      if (level5Scores.length === 0) {
        return (
          <>
            {firstScoreMsg}
          </>
        );
      } else if (score < level5Scores[level5Scores.length - 1].score) {
        return (
          <>
            {newScoreMsg}
          </>
        );
      }
    } else if (difficulty === 6) {
      if (level6Scores.length === 0) {
        return (
          <>
            {firstScoreMsg}
          </>
        );
      } else if (score < level3Scores[level3Scores.length - 1].score) {
        return (
          <>
            {newScoreMsg}
          </>
        );
      }
    } else {
      return (
        <>
          <br/>
          <h2>You used {score} turns</h2>
          <p>choose another color</p>
          <br/>
        </>
      );
    }
  } else if (!imageNumber) {
    return (
      <>
        <button onClick={() => setOpenInstructions(true)}>how to</button>
        <button onClick={() => setOpenHighScores(true)}>high scores</button>
        <Instructions
          open={openInstructions}
          onClose={() => setOpenInstructions(false)}/>
        <HighScores
          open={openHighScores}
          onClose={() => setOpenHighScores(false)}
          level3Scores={level3Scores}
          level4Scores={level4Scores}
          level5Scores={level5Scores}
          level6Scores={level6Scores}/>
      </>
    )
  } else {
    return (
      <>
        <br/>
        <h3>turn {turnNo}</h3>
        <button onClick={() => setOpenInstructions(true)}>how to</button>
        <button onClick={() => setOpenHighScores(true)}>high scores</button>
        <Instructions
            open={openInstructions}
            onClose={() => setOpenInstructions(false)}/>
          <HighScores
            open={openHighScores}
            onClose={() => setOpenHighScores(false)}
            level3Scores={level3Scores}
            level4Scores={level4Scores}
            level5Scores={level5Scores}
            level6Scores={level6Scores}/>
      </>
    );
  }
}

GameStatus.propTypes = {
  gameComplete: PropTypes.bool,
  turnNo: PropTypes.number,
  imageNumber: PropTypes.number,
  difficulty: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    gameComplete: state.tileGamePlay.gameComplete,
    turnNo: state.tileGamePlay.turnNo,
    imageNumber: state.tileGamePlay.imageNumber,
    difficulty: state.tileGamePlay.difficulty
  };
}

const Game1Status = connect(mapStateToProps)(GameStatus);

export default Game1Status;