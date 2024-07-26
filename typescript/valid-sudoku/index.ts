// SOLUTION EXPLANATION:
//
// I was able to solve this by inutition, it is not very performant at all
//
// The downside here is that it walks the grid diagonally to reduce the number
// of iterations to O(N)
//
// Perhaps there is a faster way? I don't know of any right now... will have to
// check the solutions...
//


function isValidSudoku(board: string[][]): boolean {
  // Iterate over the grid diagonally
  for (let diagonal = 0; diagonal < board.length; diagonal++) {
    const row = board[diagonal];
    const col = [
      board[0][diagonal],
      board[1][diagonal],
      board[2][diagonal],
      board[3][diagonal],
      board[4][diagonal],
      board[5][diagonal],
      board[6][diagonal],
      board[7][diagonal],
      board[8][diagonal]
    ]

    if (!isValid(row) || !isValid(col)) return false

    // TODO: Check the 3 x 3 squares in the row
    //
    // First time % 3 is the first row, then we need the two squares which are right
    //
    // Second time % 3 is the middle row, then we need one to the left, one to the right
    //
    // Third time % 3 is the last row, then we need both to the left
    if (diagonal % 3 === 0) {
      const squares = getSquares(board, diagonal)
      const allValid = squares.every(square => isValid(square))
      if (!allValid) return false
    }
  }
  return true

};

// Return 3 squares
// From the persepctive of the isvalid function these are rows
function getSquares(board: string[][], diagonal: number): string[][] {
  let offset = -diagonal
  let squares = []
  for (let i = 0; i < 3; i++) {
    const shift = diagonal + offset
    squares.push([
      board[diagonal][0 + shift],
      board[diagonal][1 + shift],
      board[diagonal][2 + shift],

      board[diagonal + 1][0 + shift],
      board[diagonal + 1][1 + shift],
      board[diagonal + 1][2 + shift],

      board[diagonal + 2][0 + shift],
      board[diagonal + 2][1 + shift],
      board[diagonal + 2][2 + shift]
    ])
    offset += 3
  }
  console.log("Squares -> ", { diagonal, squares })
  return squares
}

function isValid(row: string[]): boolean {
  const set = new Set();
  for (let i = 0; i < row.length; i++) {
    if (row[i] === ".") continue;
    if (set.has(row[i])) return false;
    set.add(row[i])
  }
  return true
}


let input: string[][] = [[]]

input = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
// Expect true
console.log("RESULT -> ", isValidSudoku(input))

input = [["8", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
// Epxect false
console.log("RESULT -> ", isValidSudoku(input))

input = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."]
]
// Expect false
console.log("RESULT -> ", isValidSudoku(input))
