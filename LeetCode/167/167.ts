function twoSum(numbers: number[], target: number): number[] {
    let i = 0, j = numbers.length - 1
    while (i < j) {
        const delta = numbers[i] + numbers[j] - target
        if ( delta < 0 ) ++i
        else if ( delta > 0 ) --j
        else return [i + 1, j + 1]
    }
    throw new Error('Cannot find the two addands')
}
