function isPalindrome(s: string): boolean {
    const letters = s.replaceAll(/[^0-9A-Za-z]/g, '').toLowerCase()
    return letters === letters.split('').toReversed().join('')
}
