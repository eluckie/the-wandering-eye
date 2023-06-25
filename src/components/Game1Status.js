import PropTypes from "prop-types";
import { connect } from "react-redux";
import Instructions from "./Game1Instructions";
import HighScores from "./Game1HighScores";
import { useEffect, useState } from "react";
import NewHighScore from "./NewHighScore";
import db from './../firebase.js';
import { collection, addDoc, onSnapshot } from "firebase/firestore";

function GameStatus(props) {
  const { gameComplete, turnNo, imageNumber, difficulty } = props;

  const score = turnNo - 1;

  const [openInstructions, setOpenInstructions] = useState(false);
  const [openHighScores, setOpenHighScores] = useState(false);
  const [highScoresList, setHighScoresList] = useState([]);
  const [error, setError] = useState(null);

  function compare(a, b) {
    let comparison;
    if (a.score > b.score) {
      comparison = 1;
    } else if (a.score < b.score) {
      comparison = -1;
    }
    return comparison;
  }

  let level3 = highScoresList.filter(entry => entry.difficulty === 3);
  const level3Scores = level3.sort(compare);
  let level4 = highScoresList.filter(entry => entry.difficulty === 4);
  const level4Scores = level4.sort(compare);
  let level5 = highScoresList.filter(entry => entry.difficulty === 5);
  const level5Scores = level5.sort(compare);
  let level6 = highScoresList.filter(entry => entry.difficulty === 6);
  const level6Scores = level6.sort(compare);

  level3Scores.length = 10;
  level4Scores.length = 10;
  level5Scores.length = 10;
  level6Scores.length = 10;

  const firstScoreMsg = <h3>you got the first high score for {difficulty}x{difficulty}!</h3>

  const newScoreMsg = <h3>you got a new high score for {difficulty}x{difficulty}!</h3>

  const handleAddingNewScore = async (newAddition) => {
    await addDoc(collection(db, "puzzleHighScores"), newAddition);
    console.log("added to db! ", newAddition);
  }

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "puzzleHighScores"),
      (collectionSnapshot) => {
        const scores = [];
        collectionSnapshot.forEach((doc) => {
          scores.push({
            ...doc.data(),
            id: doc.id
          });
        });
        setHighScoresList(scores);
      },
      (error) => {
        setError(error.message);
      }
    );
    return () => {
      unSubscribe();
    }
  }, [highScoresList]);

  let addScoreForm;

  if (error) {
    addScoreForm = <p>there was an error adding your score: {error}</p>
  } else {
    addScoreForm =
      <>
        <NewHighScore
          score={score}
          difficulty={difficulty}
          addNewScore={handleAddingNewScore}/>
      </>
  }

  if (gameComplete) {
    if (difficulty === 3) {
      const lastScore = level3Scores.slice(-1);
      const lastIndex = level3Scores[level3Scores.length - 1];

      if (!level3Scores[0]) {
        return (
          <>
            {firstScoreMsg}
            {addScoreForm}
          </>
        );
      } 
      else if ((!lastIndex || score < lastScore[0].score)) {
        return (
          <>
            {newScoreMsg}
            {addScoreForm}
          </>
        );
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
    } else if (difficulty === 4) {
      const lastScore = level4Scores.slice(-1);
      const lastIndex = level4Scores[level4Scores.length - 1];

      if (!level4Scores[0]) {
        return (
          <>
            {firstScoreMsg}
            {addScoreForm}
          </>
        );
      } 
      else if (!lastIndex || score < lastScore[0].score) {
        return (
          <>
            {newScoreMsg}
            {addScoreForm}
          </>
        );
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
    } else if (difficulty === 5) {
      const lastScore = level5Scores.slice(-1);
      const lastIndex = level5Scores[level5Scores.length - 1];

      if (!level5Scores[0]) {
        return (
          <>
            {firstScoreMsg}
            {addScoreForm}
          </>
        );
      } 
      else if (!lastIndex || score < lastScore[0].score) {
        return (
          <>
            {newScoreMsg}
            {addScoreForm}
          </>
        );
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
    } else if (difficulty === 6) {
      const lastScore = level6Scores.slice(-1);
      const lastIndex = level6Scores[level6Scores.length - 1];

      if (!level6Scores[0]) {
        return (
          <>
            {firstScoreMsg}
            {addScoreForm}
          </>
        );
      } 
      else if (!lastIndex || score < lastScore[0].score) {
        return (
          <>
            {newScoreMsg}
            {addScoreForm}
          </>
        );
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