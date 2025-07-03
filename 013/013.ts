function romanToInt(s: string): number {
    const RomanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    type RomanDigit = keyof typeof RomanValues

    const romanDecimal = s.split('').map(romanDigit => RomanValues[romanDigit as RomanDigit])
    let total = 0
    for (let i = 0; i < romanDecimal.length; ++i) {
        if (i + 1 < romanDecimal.length && romanDecimal[i] < romanDecimal[i+1]) {
            total -= romanDecimal[i]
        } else {
            total += romanDecimal[i]
        }
    }

    return total

}
