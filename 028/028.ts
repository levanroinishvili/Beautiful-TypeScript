function strStr(haystack: string, needle: string): number {
    // return haystack.indexOf(needle)
    for (let start = 0; start <= haystack.length - needle.length; ++start) {
        let i = 0
        while (i < needle.length && haystack[start + i] === needle[i] ) ++i
        if (i === needle.length) return start
    }
    return -1
}
