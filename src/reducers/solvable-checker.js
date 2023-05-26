// resource from: https://www.geeksforgeeks.org/check-instance-15-puzzle-solvable/

export function isSolvable(difficulty, idArray) {
  let inversionCount = getInversionCount(difficulty, idArray);

  if (difficulty % 2 === 1) {
    if (inversionCount % 2 === 1) {
      return false;
    } else {
      return true;
    }
  } else {
    // If size is even, the puzzle is solvable if
    //   - inversion count is odd and the blank tile appears on an even row counting from bottom
    //   - inversion count is even and the blank tile appears on an odd row counting from bottom
    let rowFromBottom = findBlankPositionFromBottom(difficulty, idArray);
    let inversionCount = getInversionCount(difficulty, idArray);

    if (inversionCount % 2 === 1) {
      if (rowFromBottom % 2 === 1) {
        return false;
      } else {
        return true;
      }
    } else {
      if (rowFromBottom % 2 === 1) {
        return true;
      } else {
        return false;
      }
    }
  }
}

function getInversionCount(difficulty, idArray) {
  let inversionCount = 0;
  for (let i = 0; i < difficulty * difficulty - 1; i++) {
    for (let j = 1; j < difficulty * difficulty; j++) {
      if (idArray[j] && idArray[i] && idArray[i] > idArray[j]) {
        inversionCount++;
      }
    }
  }
  return inversionCount;
}

function findBlankPositionFromBottom(difficulty, idArray) {
  const blankTileIndex = idArray.findIndex((tile) => tile === 0);
  const row = Math.floor(blankTileIndex / difficulty);
  let rowFromBottom = difficulty - row;
  return rowFromBottom;
}