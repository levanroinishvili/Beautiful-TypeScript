// Efficient solution
function lengthOfLastWord(s: string): number {
    let i = s.length - 1
    while (i >= 0 && s[i] === ' ') --i
    // i points to the last letter
    let count = 0
    while (i >= 0 && s[i] !== ' ') --i, ++count
    return count
}

