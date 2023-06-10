// Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/

// new empty Array is Array(5).fill(null).map(()=>({}))

function isValidSudoku(board: string[][]): boolean {
  let len = board.length;
  let rows = Array(len)
    .fill(null)
    .map(() => ({}));
  let cols = Array(len)
    .fill(null)
    .map(() => ({}));
  const blockLen = len / 3;
  let blocks = new Array(len / blockLen).fill(null).map(() =>
    Array(len / blockLen)
      .fill(null)
      .map(() => ({}))
  );

  for (let j = 0; j < board.length; j++) {
    let blockJ = Math.floor(j / blockLen);
    for (let i = 0; i < board.length; i++) {
      let el = board[j][i];
      if (el === '.') continue; // conner case

      let blockI = Math.floor(i / blockLen);
      if (el in rows[j] || el in cols[i] || el in blocks[blockJ][blockI])
        return false; // base case

      rows[j][el] = true;
      cols[i][el] = true;
      blocks[blockJ][blockI][el] = true;
    }
  }
  return true;
} // T:O(n^2) S:O(n^3)
