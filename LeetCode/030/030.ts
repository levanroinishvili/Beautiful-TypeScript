function findSubstring(s: string, words: string[]): number[] {
    if (! words.length || ! s.length) return []
    const pStarts: number[] = []
    const wordCount = new Map<string, number>()
    for (const word of words) {
        wordCount.set(word, (wordCount.get(word) ?? 0) + 1)
    }

    const wordLength = words[0].length
    const sentenceLength = wordLength * words.length

    for (let offset = 0; offset < wordLength; ++offset) {
        let left = offset, right = offset
        const useCount = new Map<string, number>()
        while (right + wordLength <= s.length && left + sentenceLength <= s.length) {
            const word = s.substring(right, right + wordLength)
            right += wordLength

            const maxUse = wordCount.get(word) ?? 0
            if (! maxUse ) {
                left = right
                useCount.clear()
                continue
            }
            let wordUse = (useCount.get(word) ?? 0) + 1
            useCount.set(word, wordUse)
            while (wordUse > maxUse) {
                const wDel = s.substring(left, left + wordLength)
                if (wDel === word) --wordUse
                useCount.set(wDel, useCount.get(wDel)! - 1)
                left += wordLength
            }
            if (right - left === sentenceLength) pStarts.push(left) 
        }
    }
    return pStarts
}
