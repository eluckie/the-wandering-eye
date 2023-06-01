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
        <img src={Puzzle1} alt="view of Denver skyline visible through bushes along the bottom of the frame with the city mirror-reflected in a lake"/>
      );
    } else if (imageNumber === 2) {
      return (
        <img src={Puzzle2} alt="view of many different types of trees. different shades of yellows and greens with a hint of orange"/>
      );
    } else if (imageNumber === 3) {
      return (
        <img src={Puzzle3} alt="view of an orange-tinted sky behind a mountain backdrop. overlooking an expansive field with lots of plants and dirt. everything has an orange glow from the sunset"/>
      );
    } else if (imageNumber === 4) {
      return (
        <img src={Puzzle4} alt="view of a cotton candy purple, pink, and blue sky above a few trees and field of yellow flowers. rolling hills peeking out of the background"/>
      );
    } else if (imageNumber === 5) {
      return (
        <img src={Puzzle5} alt="view of an intesely-colored sunset over the rolling waves of the ocean. the water and edges of the sky are a deep dark blue with a splash of pink, light blue, orange, and yellow across the center of the sky from the sunset"/>
      );
    } else {
      return (
        <img src={Puzzle6} alt="bright green lizard perched on a (different shade) of bright green leaves. surrounded by lush, bright green differently-shaped leaves and plants"/>
      );
    }
  } else if (!tiles) {
    return null;
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