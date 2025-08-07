// Codes of characters used in the problem
const c0 = '0'.charCodeAt(0)
const c9 = '9'.charCodeAt(0)
const cA = 'A'.charCodeAt(0)
const cZ = 'Z'.charCodeAt(0)
const ca = 'a'.charCodeAt(0)
const cz = 'z'.charCodeAt(0)

// Basic function for checking character types and converting upper case to lower case
const isDigit = (code: number) => c0 <= code && code <= c9
const isUpper = (code: number) => cA <= code && code <= cZ
const isLower = (code: number) => ca <= code && code <= cz
const isAlpha = (code: number) => isDigit(code) || isUpper(code) || isLower(code)
const upperToLower = (code: number) => code - cA + ca

function isPalindrome(s: string): boolean {
    for (let i = 0, j = s.length - 1; i < j;) {
        let left = s.charCodeAt(i), right = s.charCodeAt(j)
        if ( ! isAlpha(left) ) ++i
        else if ( ! isAlpha(right) ) --j
        else {
            if ( isUpper(left) ) left = upperToLower(left)
            if ( isUpper(right) ) right = upperToLower(right)
            if ( left !== right ) return false
            ++i, --j
        }
    }
    return true
}
