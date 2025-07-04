function longestCommonPrefix(strs: string[]): string {
    let k = 0
    while (strs.every(s => s.length > k && s[k] === strs[0][k])) {
        ++k
    }
    return strs[0].slice(0, k)
}
