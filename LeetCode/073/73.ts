
function setZeroes(matrix: number[][]): void {
    if (! matrix.length ) return
    const [height, width] = [matrix.length, matrix[0].length]
    let firstRowHas0 = false, firstColHas0 = false
    for (let col = 0; col < width; ++col) {
        if (! matrix[0][col]) {
            firstRowHas0 = true
            break
        }
    }
    for (let row = 0; row < height; ++row) {
        if (! matrix[row][0]) {
            firstColHas0 = true
            break
        }
    }
    for (let row = 1; row < height; ++row) {
        for (let col = 1; col < width; ++col) {
            if ( ! matrix[row][col] ) matrix[row][0] = matrix[0][col] = 0
        }
    }
    for (let row = 1; row < height; ++row) {
        if (! matrix[row][0]) for (let col = 1; col < width; ++col) matrix[row][col] = 0
    }
    for (let col = 1; col < width; ++col) {
        if (! matrix[0][col]) for (let row = 1; row < height; ++row) matrix[row][col] = 0
    }
    if (firstRowHas0) for (let col = 0; col < width; ++col) matrix[0][col] = 0
    if (firstColHas0) for (let row = 0; row < height; ++row) matrix[row][0] = 0 
}
