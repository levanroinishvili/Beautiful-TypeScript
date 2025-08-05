/* Takes past or future-past state of the cell */
const wasAlive = (cell: number) => cell & 0b01 // 1
/* Takes future-past state of the cell */
const willLive = (cell: number) => (cell & 0b10) >> 1

const countNeighbors = (row: number, col: number, board: number[][]) => {
    return [
        [-1, -1], [-1, 0], [-1, +1],
        [ 0, -1],          [ 0, +1],
        [+1, -1], [+1, 0], [+1, +1],
    ].map(([dr, dc]) => wasAlive(board[row + dr]?.[col + dc] ?? 0))
    .reduce((total, alive) => total + alive, 0)
}

function gameOfLife(board: number[][]): void {
    for (let row = 0; row < board.length; ++row) {
        for (let col = 0; col < board[row].length; ++col) {
            const neighbors = countNeighbors(row, col, board)
            const futureState = (neighbors === 3 || neighbors ===2 && board[row][col]) as number
            board[row][col] += futureState << 1
        }
    }
    for (let row = 0; row < board.length; ++row) {
        for (let col = 0; col < board[row].length; ++col) {
            board[row][col] = willLive(board[row][col])
        }
    }
}
