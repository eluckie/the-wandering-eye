import { connect } from "react-redux";
import Game1Tile from "./Game1Tile";
import { selectTile } from "../actions/actions";
import PropTypes from "prop-types";
import Puzzle1 from "./../img/1.jpg";
import Puzzle2 from "./../img/2.jpg";
import Puzzle3 from "./../img/3.jpg";
import Puzzle4 from "./../img/4.jpg";
import Puzzle5 from "./../img/5.jpg";
import Puzzle6 from "./../img/6.jpg";

function Game1(props) {
  const { difficulty, tiles, imageNumber, onTileClicked, selectedId, gameComplete } = props;

  const width = 500;
  const height = 400;
  const tileWidth = width / difficulty;
  const tileHeight = height / difficulty;
  
  const tileWrapperStyle = {
    width: `${difficulty * tileWidth}px`
  };
  
  const tileContainerStyle = {
    gridTemplateColumns: `repeat(${difficulty}, ${tileWidth}px)`
  };

  if (gameComplete) {
    if (imageNumber === 1) {
      return (
        <img src={Puzzle1} alt=""/>
      );
    } else if (imageNumber === 2) {
      return (
        <img src={Puzzle2} alt=""/>
      );
    } else if (imageNumber === 3) {
      return (
        <img src={Puzzle3} alt=""/>
      );
    } else if (imageNumber === 4) {
      return (
        <img src={Puzzle4} alt=""/>
      );
    } else if (imageNumber === 5) {
      return (
        <img src={Puzzle5} alt=""/>
      );
    } else {
      return (
        <img src={Puzzle6} alt=""/>
      );
    }
  } else if (!tiles) {
    return (
      <>
        <div></div>
      </>
    );
  } else {
    return (
      <>
        <div className="tile-wrapper" style={tileWrapperStyle}>
          <div className="tile-container" style={tileContainerStyle}>
            {tiles.map((tile, index) => (
              <Game1Tile
                key={index}
                id={tile.id}
                correctPos={tile.id === index}
                imageNumber={imageNumber}
                onTileClick={onTileClicked}
                tileWidth={tileWidth}
                tileHeight={tileHeight}
                difficulty={difficulty}
                selected={selectedId === tile.id}
                width={width}
                height={height}/>
            ))}
          </div>
        </div>
      </>
    );
  }
}

Game1.propTypes = {
  onTileClicked: PropTypes.func,
  difficulty: PropTypes.number,
  tiles: PropTypes.array,
  imageNumber: PropTypes.number,
  selectedId: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    difficulty: state.tileGamePlay.difficulty,
    tiles: state.tileGamePlay.tiles,
    imageNumber: state.tileGamePlay.imageNumber,
    selectedId: state.tileGamePlay.selectedId,
    gameComplete: state.tileGamePlay.gameComplete
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTileClicked: (id) => {
      dispatch(selectTile(id));
    }
  };
}

const Game1View = connect(mapStateToProps, mapDispatchToProps)(Game1);

export default Game1View;