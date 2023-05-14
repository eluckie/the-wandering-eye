import * as c from "./../actions/ActionTypes";
import * as t from "./tile-functions";

const initialState = {
  turnNo: 1,
  clicksWithinTurn: 0,
  selectedId: null,
  gameComplete: false,
  imageNumber: null,
  tiles: [],
  difficulty: null
};

function tileGame(state = initialState, action) {
  switch(action.type) {
    case c.INIT_GAME: {
      const difficulty = Math.floor(Math.random() * 4 + 3);
      return Object.assign({}, initialState, {
        difficulty,
        imageNumber: action.imageNumber,
        tiles: t.generateTiles(difficulty)
      });
    }
    case c.SELECT_TILE: {
      if (state.gameComplete) {
        return state;
      }
      if (action.id < 0 || action.id > state.difficulty * state.difficulty - 1) {
        return state;
      }
      const numClicks = state.clicksWithinTurn + 1;
      if (numClicks === 1) {
        const newTiles = state.tiles.map((tile) => tile);
        return Object.assign({}, state, {
          selectedId: action.id,
          clicksWithinTurn: numClicks,
          gameComplete: false,
          tiles: newTiles
        });
      }
      const newTiles = state.tiles.map((tile) => tile);
      if (action.id === state.selectedId) {
        return Object.assign({}, state, {
          selectedId: null,
          clicksWithinTurn: 0,
          tiles: newTiles
        });
      }
      const setWithSwappedTiles = t.swapTilesInTileSet(
        newTiles,
        state.selectedId,
        action.id
      );
      const gameComplete = t.allTilesAligned(setWithSwappedTiles);
      return Object.assign({}, state, {
        selectedId: null,
        clicksWithinTurn: 0,
        gameComplete,
        turnNo: state.turnNo + 1,
        tiles: setWithSwappedTiles
      });
    }

    case c.SHUFFLE_TILES: {
      const newTiles = t.shuffleTileSet(state.tiles);
      return Object.assign({}, state, { tiles: newTiles});
    }

    case c.REVERSE_TILES: {
      const newTiles = t.reverseTileSet(state.tiles);
      return Object.assign({}, state, { tiles: newTiles });
    }

    default:
      return state;
  }
}

export default tileGame;