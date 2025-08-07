function fullJustify(words: string[], maxWidth: number): string[] {
    const lines: string[] = []
    let start = 0
    while (start < words.length) {
        const {end, minWidth} = readLine(words, start, maxWidth)

        if ( end < words.length ) lines.push(justifyLine(words, start, end, minWidth, maxWidth))
        else lines.push(justifyLastLine(words, start, end, maxWidth))

        start = end
    }
    return lines
}

function readLine(words: string[], start: number, maxWidth: number) {
    let end = start
    let minWidth = 0
    let nextMinWidth = words[end].length
    while (nextMinWidth <= maxWidth) {
        ++end
        minWidth = nextMinWidth
        if ( end >= words.length ) break
        nextMinWidth += 1 + words[end].length
    }
    return {end, minWidth}
}

function justifyLine(
    words: string[],
    start: number,
    end: number,
    minWidth: number,
    maxWidth: number,
): string {
    if ( start >= end ) throw new Error(`start (${start}) and end (${end}) not valid`)
    if ( start + 1 === end ) return words[start].padEnd(maxWidth)
    const r = (maxWidth - minWidth) % (end - start - 1)
    const gap = 1 + (maxWidth - minWidth) / (end - start - 1)
    let line = words[start]
    for (let i = start + 1; i <= start + r; ++i) line += ' '.repeat(gap + 1) + words[i]
    for (let i = start + r + 1; i <end; ++i) line += ' '.repeat(gap) + words[i]

    return line
}

function justifyLastLine(words: string[], start: number, end: number, maxWidth: number) {
    return words
        .slice(start, end)
        .join(' ')
        .padEnd(maxWidth)
}
