// Readable solution
function lengthOfLastWord(s: string): number {
    return s
        .trimEnd() // Trailing spaces will make last word "empty"
        .split(/\s+/) // Array of words
        .at(-1) // Last word
        ?.length // Length
        ?? 0 // No words? Return `0` instead of `undefined`
}
