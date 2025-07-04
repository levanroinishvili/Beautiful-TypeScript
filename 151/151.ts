function reverseWords(s: string): string {
    return s
        .split(/\s+/) // Words and potentially first/last empty word
        .filter(word => word) // Remove empty words
        .toReversed()
        .join(' ')
}
