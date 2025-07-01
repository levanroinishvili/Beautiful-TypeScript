function hIndex(citations: number[]): number {
    const maxCitations = 1000
    const citationsCount = new Array<number>(1 + maxCitations).fill(0)
    for (const c of citations) {
        ++citationsCount[c]
    }
    for (let i = citationsCount.length - 2; i >= 0; --i) {
        citationsCount[i] += citationsCount[i + 1]
        if ( i <= citationsCount[i] ) return i
    }
    throw new Error('This should not be reached')
}
