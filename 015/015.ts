function threeSum(nums: number[]): [number, number, number][] {
    const triplets: [number, number, number][] = []
    const ascending = (a: number, b: number) => a - b
    nums.sort(ascending)
    for (let first = 0, last = NaN; first < nums.length - 2; ++first) {
        if (last === nums[first]) continue
        else last = nums[first]
        for (const pair of getPairs(nums, -last, first + 1)) {
            triplets.push([last, ...pair])
        }
    }
    return triplets
}


function * getPairs(sortedNums: readonly number[], sum: number, start: number): Generator<[number, number], void, void> {
    let left = start, right = sortedNums.length - 1
    let lastLeft = NaN
    while (left < right) {
        const s = sortedNums[left] + sortedNums[right]
        if ( s < sum ) ++left
        else if ( s > sum ) --right
        else {
            if ( lastLeft !== sortedNums[left] ) {
                lastLeft = sortedNums[left]
                yield [sortedNums[left], sortedNums[right]]
            }
            ++left, --right
        }
    }
}

