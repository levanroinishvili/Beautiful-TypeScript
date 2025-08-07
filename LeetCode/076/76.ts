function minWindow(s: string, t: string): string {
    const need = new Array<number>(128).fill(0)
    for (let i = t.length - 1; i >= 0; --i) ++need[t.charCodeAt(i)]
    const uniqueChars = need.reduce((total, count) => total + (count > 0 ? 1 : 0), 0)
    let tickedChars = 0
    let minLength = Infinity, [l, r] = [-1, -1]
    const have = new Array<number>(128).fill(0)
    let left = 0, right = 0
    while (right < s.length) {
        const code = s.charCodeAt(right++)
        if ( ++have[code] === need[code] ) ++tickedChars
        for (let lcode = s.charCodeAt(left); have[lcode] > need[lcode]; lcode = s.charCodeAt(++left)) {
            --have[lcode]
        }
        if (tickedChars === uniqueChars && right - left < minLength) {
            [l, r] = [left, right]
            minLength = right - left
        }
    }
    return s.substring(l, r)
}
