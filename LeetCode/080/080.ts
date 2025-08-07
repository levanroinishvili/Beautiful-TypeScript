function removeDuplicates(nums: number[]): number {
    let length = 1
    for ( let i = 1; i < nums.length; ++i) {
        if (length === 1 || nums[i] !== nums[length-1] || nums[i] !== nums[length-2]) {
            nums[length++] = nums[i]
        }
    }
    return length
}
