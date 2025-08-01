function rotate(matrix: number[][]): void {
    let w = matrix.length
    const L = w - 1
    for (let layer = (w >> 1) - 1; layer >= 0; --layer) {
        for (let col = L - layer - 1; col >= layer; --col ) {
            const temp = matrix[L-col][layer]
            matrix[L-col][layer] = matrix[L-layer][L-col]
            matrix[L-layer][L-col] = matrix[col][L-layer]
            matrix[col][L-layer] = matrix[layer][col]
            matrix[layer][col] = temp
        }
    }
}
