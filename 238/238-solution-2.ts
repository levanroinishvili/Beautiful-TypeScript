/*
Follow up:
    Can you solve the problem in O(1) extra space complexity?
    (The output array does not count as extra space for space
    complexity analysis.)
*/
function productExceptSelf(nums: number[]): number[] {
    const answer = new Array<number>(nums.length).fill(1)
    let product = 1
    for (let i = 1; i < answer.length; ++i) {
        answer[i] *= product *= nums[i-1]
    }
    console.log(answer)
    product = 1
    for (let i = answer.length - 2; i >= 0; --i) {
        answer[i] *= product *= nums[i+1]
    }
    console.log(answer)
    return answer
}
