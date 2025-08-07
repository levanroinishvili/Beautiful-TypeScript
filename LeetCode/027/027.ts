function removeElement(nums: number[], val: number): number {
    let length = 0 // Final length after filtering out `val`
    for (let i = 0; i < nums.length; ++i) {
        if ( nums[i] !== val ) nums[length++] = nums[i]
    }
    return length
}
