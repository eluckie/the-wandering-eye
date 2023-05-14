import { connect } from "react-redux";
import Game1Tile from "./Game1Tile";
import { selectTile } from "../actions/actions";
import PropTypes from "prop-types";

function Game1(props) {
  const { difficulty, tiles, imageNumber, onTileClicked, selectedId } = props;

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

Game1.propTypes = {
  onTileClicked: PropTypes.func,
  difficulty: PropTypes.number,
  tiles: PropTypes.array,
  imageNumber: PropTypes.number,
  selectedId: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    difficulty: state.difficulty,
    tiles: state.tiles,
    imageNumber: state.imageNumber,
    selectedId: state.selectedId
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