import shuffle from "shuffle-array";
import { isSolvable } from "./solvable-checker";

export function generateTileSet(difficulty) {
  let newTiles = [];
  for (let i = 0; i < difficulty * difficulty; i++) {
    newTiles[i] = i + 1;
  }
  const blankTileIndex = difficulty * difficulty - 1;
  newTiles[blankTileIndex] = 0;

  let solvable = false;
  while (!solvable) {
    newTiles = shuffle(newTiles);
    solvable = isSolvable(difficulty, newTiles);
  }
  return newTiles;
}

export function swapTilesInTileSet(tiles, sourceId, placeId) {
  let sourceIndex = tiles.findIndex((tile) => tile === sourceId);
  let source = tiles[sourceIndex];
  let placeIndex = tiles.findIndex((tile) => tile === placeId);
  let place = tiles[placeIndex];
  tiles[placeIndex] = source;
  tiles[sourceIndex] = place;
  return tiles;
}

export function allTilesAligned(tiles) {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i] !== 0 && tiles[i] !== i + 1) {
      return false;
    }
  }
  return true;
}

export function validTileChoice(id, difficulty, tiles) {
  if (id < 1 || id > difficulty * difficulty - 1) {
    return false;
  }
  return tileIsMovable(difficulty, id, tiles);
}

export function tileIsMovable(difficulty, id, tiles) {
  const index = tiles.findIndex((tile) => tile === id);
  const row = Math.floor(index / difficulty);
  if (row < difficulty - 1) {
    if (tiles[index + difficulty] === 0) {
      return true;
    }
  }

  if (row > 0) {
    if (tiles[index - difficulty] === 0) {
      return true;
    }
  }

  const column = index % difficulty;
  if (column < difficulty - 1) {
    if (tiles[index + 1] === 0) {
      return true;
    }
  }

  if (column > 0) {
    if (tiles[index - 1] === 0) {
      return true;
    }
  }

  return false;
}

