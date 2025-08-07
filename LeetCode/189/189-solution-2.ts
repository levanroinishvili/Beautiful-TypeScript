function reverse(array: number[], from = 0, to = array.length - 1) {
    for (let k = to - from - 1 >> 1; k >= 0; --k) {
        const [i, j] = [from + k, to - k];
        array[i] = array[i] ^ array[j]
        array[j] = array[i] ^ array[j]
        array[i] = array[i] ^ array[j]
    }
}

function rotate(nums: number[], k: number): void {
    const n = nums.length

    let i = (n - 1 - k) % n
    if ( i < 0 ) i += n
    reverse(nums, 0, i)
    if (i + 1 < n) reverse(nums, i + 1)
    reverse(nums)
}
