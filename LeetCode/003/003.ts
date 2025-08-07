function lengthOfLongestSubstring(s: string): number {
    const lastIndex = new Map<string, number>()
    let maxLength = 0
    for (let left = 0, right = 0; right < s.length; ++right) {
        const char = s[right]

        const lastOccurance = lastIndex.get(char)
        if ( lastOccurance !== undefined && lastOccurance >= left ) {
            left = lastOccurance + 1
        }

        lastIndex.set(char, right)
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
}
