import PropTypes from "prop-types";
import Puzzle1 from "./../img/1.jpg";
import Puzzle2 from "./../img/2.jpg";
import Puzzle3 from "./../img/3.jpg";
import Puzzle4 from "./../img/4.jpg";
import Puzzle5 from "./../img/5.jpg";
import Puzzle6 from "./../img/6.jpg";

function Game1Tile(props) {
  const { id, difficulty, tileWidth, selected, correctPos, imageNumber, onTileClick } = props;

  const top = -Math.floor(id / difficulty ) * tileWidth;
  const left =
    id < difficulty ? -id * tileWidth : -(id % difficulty) * tileWidth;

  let tileStyle = {
    backgroundPosition: `left ${left}px top ${top}px`,
    backgroundRepeat: "no-repeat"
  };

  if (imageNumber === 1) {
    tileStyle.backgroundImage = `url('${Puzzle1}')`;
  } else if (imageNumber === 2) {
    tileStyle.backgroundImage = `url('${Puzzle2}')`;
  } else if (imageNumber === 3) {
    tileStyle.backgroundImage = `url('${Puzzle3}')`;
  } else if (imageNumber === 4) {
    tileStyle.backgroundImage = `url('${Puzzle4}')`;
  } else if (imageNumber === 5) {
    tileStyle.backgroundImage = `url('${Puzzle5}')`;
  } else {
    tileStyle.backgroundImage = `url('${Puzzle6}')`;
  }

  if (correctPos) {
    tileStyle = {
      ...tileStyle,
      outline: "1px dotted white",
      outlineOffset: "-5px"
    };
  }

  let className = selected ? "tile selected" : "tile";

  return (
    <>
      <div
        className={className}
        style={tileStyle}
        onClick={() => onTileClick(id)}>
      </div>
    </>
  );
}

Game1Tile.propTypes = {
  id: PropTypes.number,
  difficulty: PropTypes.number,
  tileWidth: PropTypes.number,
  selected: PropTypes.bool,
  correctPos: PropTypes.bool,
  imageNumber: PropTypes.number,
  onTileClick: PropTypes.func
};

export default Game1Tile;