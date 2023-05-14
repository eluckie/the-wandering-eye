import shuffle from "shuffle-array";

export const generateTiles = (difficulty) => {
  let newTiles = [];
  for (let i = 0; i < difficulty * difficulty; i++) {
    let newTile = {
      id: i,
      top: -(Math.floor(i / difficulty)) * 100,
      left: i < difficulty ? -i * 100 : -(i % difficulty) * 100
    };
    newTiles.push(newTile);
  }
  return newTiles;
}

export const reverseTileSet = (tiles) => {
  return [...tiles].reverse();
}

export const shuffleTileSet = (tiles) => {
  return shuffle([...tiles]);
}

export function swapTilesInTileSet(tiles, sourceId, placeId) {
  const tileCopy = [...tiles];
  let sourceIdx = tileCopy.findIndex(tile => tile.id === sourceId);
  let source = tileCopy[sourceIdx];
  let placeIdx = tileCopy.findIndex(tile => tile.id === placeId);
  let place = Object.assign({}, tileCopy[placeIdx]);
  tileCopy[placeIdx] = source;
  tileCopy[sourceIdx] = place;
  return tileCopy;
}

export const allTilesAligned = (tiles) => {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].id !== i) {
      return false;
    }
  }
  return true;
}