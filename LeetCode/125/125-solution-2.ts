function isPalindrome(s: string): boolean {
    const letters = s.replaceAll(/[^0-9A-Za-z]/g, '').toLowerCase()

    for (let i = 0, j = letters.length - 1; i < j; ++i, --j) {
        if ( letters[i] !== letters[j] ) return false
    }
    return true
}
