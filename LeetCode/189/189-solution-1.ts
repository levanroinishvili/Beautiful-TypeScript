function gcd(a: number, b: number) {
    while (a > 0) {
        [a, b] = [b % a, a]
    }
    return b
}

function rotate(nums: number[], k: number): void {
    const q = gcd(k, nums.length)
    const n = nums.length
    for (let start = 0; start < q; ++start) {
        let val = nums[start]
        for(let i = (start + k) % n; i !== start; i = (i + k) % n) {
            [val, nums[i]] = [nums[i], val] // val <-> nums[i]
        }
        nums[start] = val
    }
}
