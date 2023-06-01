import { connect } from "react-redux";
import Game2Tile from "./Game2Tile.js";
import PropTypes from "prop-types";
import { moveTile } from "../actions/actions";

function Game2(props) {
  const { difficulty, tiles, imageNumber, onTileClick, gameComplete } = props;
  const puzzleWidth = 540;
  const tileWidth = puzzleWidth / difficulty;
  
  const tileWrapperStyle = {
    width: `${difficulty * tileWidth}px`
  }

  const tileContainerStyle = {
    gridTemplateColumns: `repeat(${difficulty}, ${tileWidth}px)`
  }

  if (!gameComplete) {
    return (
      <>
      <div className="gamePlay">
        <div className="tile-wrapper" style={tileWrapperStyle}>
          <div className="tile-container" style={tileContainerStyle}>
            {tiles.map((tile, index) =>
              <Game2Tile
                key={index}
                id={tile}
                isCorrectPos={tile === (index + 1)}
                imageNumber={imageNumber}
                onClick={onTileClick}
                tileWidth={tileWidth}
                difficulty={difficulty}/>
            )}
          </div>
        </div>
        </div>
      </>
    );
  }
  
}

Game2.propTypes = {
  onTileClick: PropTypes.func,
  difficulty: PropTypes.number,
  tiles: PropTypes.array,
  imageNumber: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    imageNumber: state.sliderGamePlay.imageNumber,
    tiles: state.sliderGamePlay.tiles,
    difficulty: state.sliderGamePlay.difficulty,
    gameComplete: state.sliderGamePlay.gameComplete
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTileClick: (id) => {
      dispatch(moveTile(id));
    }
  };
}

const Game2View = connect(mapStateToProps, mapDispatchToProps)(Game2);

export default Game2View;