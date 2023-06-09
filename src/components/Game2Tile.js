import PropTypes from "prop-types";
import Puzzle1 from "./../img/7.jpg";
import Puzzle2 from "./../img/8.jpg";
import Puzzle3 from "./../img/9.jpg";
import Puzzle4 from "./../img/10.jpg";
import Puzzle5 from "./../img/11.jpg";
import Puzzle6 from "./../img/12.jpg";

function Game2Tile(props) {
  const { id, difficulty, tileWidth, isCorrectPos, imageNumber, onClick } = props;

  return (
    <>
      <div className="tile" style={getStyleForTile(id, difficulty, tileWidth, isCorrectPos, imageNumber)} onClick={() => onClick(id)}>
      </div>
    </>
  );
}

Game2Tile.propTypes = {
  id: PropTypes.number,
  difficulty: PropTypes.number,
  tileWidth: PropTypes.number,
  isCorrectPos: PropTypes.bool,
  imageNumber: PropTypes.number,
  onTileClick: PropTypes.func
};

function getStyleForTile(id, difficulty, tileWidth, isCorrectPos, imageNumber) {
  if (id === 0) {
    return {};
  }

  const index = id - 1;
  const top = -Math.floor(index / difficulty) * tileWidth;
  const left = index < difficulty ? -index * tileWidth : -(index % difficulty) * tileWidth;

  let style = {
    backgroundPosition: `left ${left}px top ${top}px`
  };

  if (imageNumber === 1) {
    style.backgroundImage = `url('${Puzzle1}')`;
  } else if (imageNumber === 2) {
    style.backgroundImage = `url('${Puzzle2}')`;
  } else if (imageNumber === 3) {
    style.backgroundImage = `url('${Puzzle3}')`;
  } else if (imageNumber === 4) {
    style.backgroundImage = `url('${Puzzle4}')`;
  } else if (imageNumber === 5) {
    style.backgroundImage = `url('${Puzzle5}')`;
  } else {
    style.backgroundImage = `url('${Puzzle6}')`;
  }

  if (isCorrectPos) {
    style = {
      ...style,
      outline: "1px dotted white",
      outlineOffset: "-5px"
    };
  }
  return style;
}

export default Game2Tile;