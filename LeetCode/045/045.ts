function jump(nums: number[]): number {
    const minJumps = new Array<number>(nums.length) // .fill(Infinity)
    minJumps[0] = 0
    let edge = 0

    for (let i = 0; i < nums.length - 1; ++i) {
        const minJump = minJumps[i] + 1
        for (let j = edge + 1; j < minJumps.length && j <= i + nums[i]; ++j) {
            minJumps[j] = minJump
            edge = j
            // if ( edge >= nums.length - 1 ) break
        }
        // if ( edge >= nums.length - 1 ) break
    }
    return minJumps.at(-1)!
}
