function isValidSudoku(board: string[][]): boolean {
    const rows = Array.from({length: 9}, () => new Array(9).fill(0))
    const cols = Array.from({length: 9}, () => new Array(9).fill(0))
    const boxes = Array.from({length: 9}, () => new Array(9).fill(0))

    for (let row = 0; row < 9; ++row) {
        for (let col = 0; col < 9; ++col) {
            if (board[row][col] === '.') continue
            const d = parseInt(board[row][col]) - 1
            if (rows[row][d]++) return false
            if (cols[col][d]++) return false
            const bi = 3 * Math.floor(row / 3) + Math.floor(col / 3)
            if (boxes[bi][d]++) return false
        }
    }
    return true
}
