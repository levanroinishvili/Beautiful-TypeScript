function convert(s: string, numRows: number): string {

    if ( numRows === 1 ) return s

    const rows = Array.from({length: numRows}, () => new Array<string>(0))

    for (let i = 0; i < s.length;) {
        for (let row = 0; i < s.length && row < numRows - 1; ++row) rows[row].push(s[i++])
        for (let row = numRows - 1; i < s.length && row > 0; --row) rows[row].push(s[i++])
    }

    return rows.map(row => row.join('')).join('')
}

/*
    | Row |  Cycle | Cycle  | Cycle |
  0 |   0 | ↓P     | ↓I     | ↓N    |
 ...|   1 | ↓A ↑L  | ↓S ↑I  | ↓G    |
 ...|   2 | ↓Y ↑A  | ↓H ↑R  |       |
R-1 |   4 | ↓P     | ↓I     |       |
*/
