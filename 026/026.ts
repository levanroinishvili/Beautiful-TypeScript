function removeDuplicates(nums: number[]): number {
    if ( ! nums.length ) return 0

    let length = 1
    for ( let i = 1; i < nums.length; ++i) {
        if ( nums[length - 1] !== nums[i] ) nums[length++] = nums[i]
    }
    return length
}
