import * as t from "./slider-functions";
import * as c from "./../actions/ActionTypes";
// import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  moves: -1,
  gameComplete: false,
  imageNumber: 0,
  tiles: [],
  difficulty: null
}

const emptyTileId = 0;

function sliderGame(state = initialState, action) {
  switch(action.type) {
    case c.INIT_GAME2: {
      const difficulty = Math.floor(Math.random() * 3) + 3;
      return Object.assign({}, initialState, {
        difficulty,
        imageNumber: action.imageNumber,
        tiles: t.generateTileSet(difficulty),
        moves: 0
      });
    }
    case c.MOVE_TILE: {
      if (state.gameComplete || !t.tileIsMovable(action.id, state.difficulty, state.tiles)) {
        return state;
      }
      return Object.assign({}, initialState, {
        moves: state.moves + 1,
        tiles: t.swapTilesInTileSet(state.tiles, emptyTileId, action.id),
        gameComplete: t.allTilesAligned(state.tiles)
      });
    }
    default:
      return state;
  }
}

export default sliderGame;