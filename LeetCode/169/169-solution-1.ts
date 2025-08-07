function majorityElement(nums: number[]): number {
    const frequency = new Map<number, number>()
    const majorityCount = nums.length / 2

    for (const num of nums) {
        const freq = 1 + (frequency.get(num) ?? 0)
        if ( freq > majorityCount ) return num
        frequency.set(num, freq)
    }

    let freqValue = NaN, freqFreq = -Infinity
    for (const [value, freq] of frequency) {
        if ( freq > freqFreq ) [freqValue, freqFreq] = [value, freq]
    }

    // if (freqFreq <= nums.length / 2) throw new Error('No majority element')

    return freqValue

}
