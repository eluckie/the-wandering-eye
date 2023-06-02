import PropTypes from "prop-types";
import { connect } from "react-redux";
import Instructions from "./Game1Instructions";
import HighScores from "./Game1HighScores";
import { useState } from "react";
import NewHighScore from "./NewHighScore";

function GameStatus(props) {
  const { gameComplete, turnNo, imageNumber, difficulty } = props;

  const score = turnNo - 1;

  const [openInstructions, setOpenInstructions] = useState(false);
  const [openHighScores, setOpenHighScores] = useState(false);
  // const [level3Scores, setLevel3Scores] = useState([]);
  // const [level4Scores, setLevel4Scores] = useState([]);
  // const [level5Scores, setLevel5Scores] = useState([]);
  // const [level6Scores, setLevel6Scores] = useState([]);
  let level3Scores = [];
  let level4Scores = [];
  let level5Scores = [];
  let level6Scores = [];

  const firstScoreMsg = <h3>your {score} moves got the first high score for {difficulty}x{difficulty}!</h3>

  const newScoreMsg = <h3>your {score} moves got a new high score for {difficulty}x{difficulty}</h3>

  const handleAddingNewScore = (newAddition) => {
    const newName = newAddition.name;
    const newScore = newAddition.score;
    let scoresArray = [];
    let newLevel3Scores = [];

    if (difficulty === 3) {
      level3Scores.push({
        name: newName,
        score: newScore
      });
      level3Scores.forEach(score => {
        scoresArray.push(score.score);
      });
      console.log("scoresArray: ", scoresArray);

      const newScoresArray = scoresArray.sort(function(a, b){return b - a});
      console.log("newScoresArray: ", newScoresArray);
      newScoresArray.forEach((score, index) => {
        const entry = level3Scores.find(entry => entry.score === score);
        const nameToAdd = entry.name;
        const scoreToAdd = entry.score;
        const entryIndex = level3Scores.indexOf(entry);
        level3Scores.splice(entryIndex, 1);

        const scoreAddition = {
          key: index,
          id: index + 1,
          name: nameToAdd,
          score: scoreToAdd
        }
        newLevel3Scores.push(scoreAddition);
      });
      console.log("newLevel3Scores: ", newLevel3Scores);
      level3Scores = newLevel3Scores;
      console.log("level3Scores: ", level3Scores);
    }
    setOpenHighScores(true);
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
      } else if (score > level3Scores[level3Scores.length - 1].score) {
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
      } else if (score > level4Scores[level4Scores.length - 1].score) {
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
      } else if (score > level5Scores[level5Scores.length - 1].score) {
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
      } else if (score > level3Scores[level3Scores.length - 1].score) {
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