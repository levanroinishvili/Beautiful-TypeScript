/** The main function that relies on infinate ConwayBoard */
function gameOfLife(board: number[][]): void {
    if ( ! board.length ) return
    const [height, width] = [board.length, board[0].length]
    // Initialize infinate ConwayBoard with the given board
    const game = new ConwayGame(board)
    game.next() // Move ConwayBoard to the next generation
    /* Update the original board with the new state from ConwayBoard.
       1. Will remove all rows from `board`: `board.splice(0, Infinity, ...)`
       2. Will add rows from `conwayBoard.read(0, height - 1, 0, width - 1)`
    */
    board.splice(0, Infinity, ...game.export(0, height - 1, 0, width - 1))
}

/** Conway's Game of Life on an infinite board */
class ConwayGame {
    private readonly board = new Map<number, Set<number>>

    constructor(board?: number[][] | Map<number, Set<number>>) {
        if (Array.isArray(board)) this.import(board, false) // If a 2-D matrix is provided, initialize the ConwayBoard with it
        else if (board instanceof Map) this.board = new Map(board) // If a Map is provided, shallow-clone it
    }

    /** Clears the board */
    public readonly clear = () => this.board.clear()

    /** Import board from a 2-D matrix */
    public readonly import = (board: number[][], clear = true) => {
        if (clear) this.clear()
        board.forEach((row, ri) => row.forEach((alive, ci) => alive && this.setAlive(ri, ci)))
    }

    /** Export a snapshot of the board into a 2-D matrix */
    public readonly export = (minRow: number, maxRow: number, minCol: number, maxCol: number) => {
        const board: number[][] = []
        for (let row = minRow; row <= maxRow; ++row) {
            const r: number[] = []
            board.push(r)
            for (let col = minCol; col <= maxCol; ++col) {
                r[col] = this.isAlive(row, col) ? 1 :0
            }
        }
        return board
    }

    //** Checks if a cell is alive on the current board */
    public readonly isAlive = (row: number, col: number) => {
        return this.board.get(row)?.has(col) ?? false
    }

    /** Sets alive a cell on the current board */
    public readonly setAlive = (row: number, col: number) => {
        const r = this.board.get(row)
        if (r) r.add(col)
        else this.board.set(row, new Set([col]))
    }

    /** Returns coordinates of all eight neighbours */
    private readonly getNeighbors = (row: number, col: number) => {
        return [
            [-1,-1], [-1,0], [-1,+1],
            [ 0,-1],         [ 0,+1],
            [+1,-1], [+1,0], [+1,+1],
        ].map<[number, number]>(([dr, dc]) => ([row + dr, col + dc]))
    }

    /** Counts alive neighbours of a cell */
    public readonly liveNeighbors = (row: number, col: number) => {
        return this.getNeighbors(row, col)
            .map(([row, col]) => this.isAlive(row, col) ? 1 : 0)
            .reduce((total, alive) => total + alive, 0 as number)
    }

    /** Checks if a cell will live in the next generation */
    public readonly willLive = (row: number, col: number) => {
        const neighbors = this.liveNeighbors(row, col)
        return neighbors === 3 || neighbors === 2 && this.isAlive(row, col)
    }

    /** Move to next generation */
    public readonly next = () => {
        const oldBoard = new ConwayGame(this.board) // Create a copy of the current board
        this.clear() // Clear the current board for the next generation
        /* Mark all cells that may potentially be alive in the next generation:
            each alive cell and its neighbors. No other cell can be alive. */
        const candidates = new ConwayGame // Why not use ConwayBoard to store candidates?
        for (const [ri, r] of oldBoard.board) {
            for (const ci of r) {
                candidates.setAlive(ri, ci) // Mark the cell itself as potentially alive
                // Mark all neighbors as potentially alive in the next generation
                candidates.getNeighbors(ri, ci).forEach(([rj, cj]) => candidates.setAlive(rj, cj))
            }
        }
        // For each candidate cell, check if it will actually be alive in the next generation
        for (const [ri, r] of candidates.board) {
            for (const ci of r) {
                if (oldBoard.willLive(ri, ci)) { // If cell is alove relative to the old board...
                    this.setAlive(ri, ci) // ...set it alive in the new board
                }
            }
        }
    }
}
