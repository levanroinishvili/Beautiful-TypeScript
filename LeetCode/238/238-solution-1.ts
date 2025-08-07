/* O(n) time and O(n) space solution. */
function productExceptSelf(nums: number[]): number[] {
    const prefix = new Array<number>(nums.length)
    prefix[0] = 1
    for (let i = 1; i < prefix.length; ++i) {
        prefix[i] = prefix[i-1] * nums[i-1]
    }
    const suffix = new Array<number>(nums.length)
    suffix[suffix.length - 1] = 1
    for (let i = suffix.length - 2; i >= 0; --i) {
        suffix[i] = suffix[i+1] * nums[i+1]
    }

    return Array.from({length: nums.length}, (_, i) => prefix[i] * suffix[i])

}
