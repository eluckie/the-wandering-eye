import * as c from "./ActionTypes";

export function initGame(imageNumber) {
  return {
    type: c.INIT_GAME,
    imageNumber
  };
}

export function selectTile(id) {
  return {
    type: c.SELECT_TILE,
    id
  };
}

export function shuffleTiles() {
  return {
    type: c.SHUFFLE_TILES
  };
}

export function reverseTiles() {
  return {
    type: c.REVERSE_TILES
  };
}