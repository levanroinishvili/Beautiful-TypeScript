function majorityElement(nums: number[]): number {
    const majorityCount = nums.length / 2
    let freqValue = NaN, freqFreq = -Infinity
    for (const num of nums.sort((a, b) => a - b)) {
        if ( num === freqValue ) ++freqFreq;
        else [freqValue, freqFreq] = [num, 1]
        if ( freqFreq > majorityCount) return freqValue
    }
    throw new Error('No majority element')
}
