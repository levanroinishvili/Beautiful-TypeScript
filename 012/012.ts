function intToRoman(num: number): string {
    const RomanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    }

    type RomanDigit = keyof typeof RomanValues

    const RomanVal = (Object.entries(RomanValues) as [RomanDigit, number][])
        .map(([roman, arabic]) => ({roman, arabic})) // [{roman: 'I', arabic: 1}, {roman: 'IV': arabic: 4}]
        .toSorted(({arabic: a1}, {arabic: a2}) => a1 - a2)

    let roman = ''

    while (num > 0) {
        let i = RomanVal.length - 1
        while (RomanVal[i].arabic > num) --i
        roman += RomanVal[i].roman
        num -= RomanVal[i].arabic
    }

    return roman
}
