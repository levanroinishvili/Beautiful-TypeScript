function trap(height: number[]): number {
    const maxLeft = new Array<number>(height.length)

    for (let i = 0, maxL = -Infinity; i < height.length; ++i) {
        maxLeft[i] = maxL = Math.max(maxL, height[i])
    }

    let volume = 0
    for (let i = height.length - 1, maxR = -Infinity; i > 0; --i) {
        maxR = Math.max(maxR, height[i])
        const level = Math.min(maxLeft[i], maxR)
        volume += level - height[i]
    }

    return volume
}
