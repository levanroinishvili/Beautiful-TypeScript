function convert(s: string, R: number): string {
    if ( R === 1 ) return s

    let answer = ''
    const d = 2 * (R - 1)

    // First row
    for (let i = 0; i < s.length; i += d) answer += s[i]

    // Rows 1...R-2
    for (let row = 1; row < R - 1; ++row) {
        for (let left = row, right = d - left; left < s.length; left += d, right += d) {
            answer += s[left]
            if (right < s.length) answer += s[right]
        }
    }

    // Last row
    for (let i = R - 1; i < s.length; i += d) answer += s[i]

    return answer
}

/*
    | Row |  Cycle | Cycle  | Cycle |
  0 |   0 | ↓P     | ↓I     | ↓N    |
 ...|   1 | ↓A ↑L  | ↓S ↑I  | ↓G    |
 ...|   2 | ↓Y ↑A  | ↓H ↑R  |       |
R-1 |   4 | ↓P     | ↓I     |       |
*/
