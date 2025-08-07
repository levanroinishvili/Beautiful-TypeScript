function spiralOrder(matrix: number[][]): number[] {
    if (! matrix.length) return []
    const [h, w] = [matrix.length, matrix[0].length]
    const count = h * w
    const spiral = new Array<number>(count)
    let [r, c] = [0, 0], [dr, dc] = [0, 1]
    let [left, right] = [0, w - 1]
    let [top, bottom] = [0, h - 1]
    for (let i = 0; i < count; ++i) {
        spiral[i] = matrix[r][c]
        // Find next [r, c]
        const [rt, ct] = [r + dr, c + dc]
        if ( ct > right ) r++, top++, [dr, dc] = [1, 0]
        else if ( rt > bottom ) c--, right--, [dr, dc] = [0, -1]
        else if ( ct < left ) r--, bottom--, [dr, dc] = [-1, 0]
        else if ( rt < top ) c++, left++, [dr, dc] = [0, 1]
        else [r, c] = [rt, ct]
    }
    return spiral
}
