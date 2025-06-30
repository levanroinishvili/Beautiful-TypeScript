function canJump(nums: number[]): boolean {
    let edge = 0;
    for (let i = 0; i < nums.length - 1; ++i) {
        edge = Math.max(edge, i + nums[i])
        if ( i + 1 > edge ) break
    }
    return edge >= nums.length - 1
}
