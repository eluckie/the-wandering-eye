import PropTypes from "prop-types";

function NewHighScore(props) {
  const { score, addNewScore } = props;

  const handleAddNewScore = (e) => {
    e.preventDefault();
    addNewScore({
      name: e.target.name.value,
      score
    });
  }

  return (
    <>
      <form onSubmit={handleAddNewScore}>
        <input
          type="text"
          name="name"
          placeholder="your name"/>
        <br/>
        <p>{score} moves</p>
        <button type="submit">add me!</button>
      </form>
    </>
  );
}

NewHighScore.propTypes = {
  score: PropTypes.number,
  addNewScore: PropTypes.func
}

export default NewHighScore;