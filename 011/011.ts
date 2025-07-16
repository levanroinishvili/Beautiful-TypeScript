function maxArea(height: number[]): number {
    let left = 0, right = height.length - 1
    let volume = (right - left) * Math.min(height[right], height[left])

    while (left < right) {
        if ( height[left] < height[right] ) ++left
        else --right
        const v = (right - left) * Math.min(height[right], height[left])
        volume = Math.max(volume, v)
    }

    return volume
}
