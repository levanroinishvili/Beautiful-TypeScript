/**
 * Main function to solve Problem 68: Text Justification from LeetCode.
 * https://leetcode.com/problems/text-justification/
 * @param words Array of words to justify.
 * @param maxWidth Required width of the justified lines.
 * @returns Array of justified lines, each line is a string with length `maxWidth`.
 */
function fullJustify(words: string[], maxWidth: number): string[] {
    const lines: string[] = [] // Array to hold justified lines.
    let start = 0 // The first word that has not been justified yet.
    while (start < words.length) {
        const {end, minWidth} = readLine(words, start, maxWidth)

        // Check if we are working with the last line.
        if ( end < words.length ) lines.push(justifyLine(words, start, end, minWidth, maxWidth))
        else lines.push(justifyLastLine(words, start, end, maxWidth)) // Work with the last line.

        start = end // Prepare for the next line.
    }
    return lines
}

/**
 * Get next line of words starting from `start` index.
 * @param words Array of words from which to read.
 * @param start Index of the first word to read.
 * @param maxWidth Required width of the justified line.
 * @returns {end, minWidth} where `end` is the index of the index of the first unread word,
 * and `minWidth` is the minimum width of the read line with a single space between words.
 */
function readLine(words: string[], start: number, maxWidth: number) {
    // if ( start >= words.length ) throw new Error('Invalid start')
    let end = start // Exclusive end, i.e. the index of the first unused word.
    let minWidth = 0 // Min with of the line with a single space between words.
    let nextMinWidth = words[end].length // The next value of `minWidth`, if THE FIRST word was added.
    while (nextMinWidth <= maxWidth) { // Exit loop. Reason: ran out of space on the line
        ++end // incorporate the next word into the line
        // Prepare for the next iteration
        minWidth = nextMinWidth // The next value of `minWidth` is inside `nextMinWidth`
        if ( end >= words.length ) break // Exit loop. Reason: ran out of words
        /* Calculate the next value of `nextMinWidth`, after one more word is added.
        This is not the first word, as this was calculated before the loop. */
        nextMinWidth += 1 + words[end].length // Add 1 space and one next word.
    }
    return {end, minWidth}
}

/**
 * Justify words inside array `words` with indeces from [start, end[
 * @param words Array of words to justify.
 * @param start Index of the first word to justify.
 * @param end Index of the last word to justify (exclusive).
 * @param minWidth Minimum width of the line with a single space between words.
 * @param maxWidth Required width of the justified line.
 * @returns line justified with spaces.
 */
function justifyLine(
    words: string[], // All words
    start: number, // Index of the first word to justify
    end: number, // Exclusive end, i.e. index after the last word to justify
    minWidth: number, // Minimum width of the line with a single space between words
    maxWidth: number, // Required width of the justified line
): string {
    if ( start >= end ) throw new Error(`start (${start}) and end (${end}) not valid`)
    /* Next, handle a special case when there are no gaps between words
    where additional spaces can be allocated. This happens only when only
    a single word is being processed. */
    if ( start + 1 === end ) return words[start].padEnd(maxWidth)
    const r = (maxWidth - minWidth) % (end - start - 1) // Number of words that will get an extra space
    const gap = 1 + (maxWidth - minWidth) / (end - start - 1) // Gap between words, i.e. number of spaces between words
    let line = words[start] // Start with the first word. This will be the only word without a leading space.
    for (let i = start + 1; i <= start + r; ++i) line += ' '.repeat(gap + 1) + words[i] // Add words with larger leading spaces
    for (let i = start + r + 1; i <end; ++i) line += ' '.repeat(gap) + words[i] // Add words with normal leading spaces

    return line
}

/**
 * 
 * @param words Array of words to justify.
 * @param start First word to justify, all the way to the end of the array.
 * @param maxWidth Required width of the justified line.
 * @returns 
 */
function justifyLastLine(words: string[], start: number, end: number, maxWidth: number) {
    return words // Take all words
        .slice(start, end) // from start to end
        .join(' ') // Join them with a single space
        .padEnd(maxWidth) // Pad the end with spaces to reach `maxWidth`
}
