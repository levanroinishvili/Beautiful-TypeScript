function isSubsequence(s: string, t: string): boolean {
    let si = 0

    for (let ti = 0; si < s.length && ti < t.length; ++ti) {
        if ( s[si] === t[ti] ) ++si
    }

    return si === s.length

}
