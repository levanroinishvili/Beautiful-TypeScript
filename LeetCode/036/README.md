# 36. Valid Sudoku

## Links

* [View @ LeetCode](https://leetcode.com/problems/valid-sudoku/)
* [Video Walkthrough](https://youtu.be/F1LIXNnApQY)
* [@Beautiful-TypeScript on YouTube](https://www.youtube.com/@BeautifulTypeScript)

## Probelm Statement

Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated **according to the following rules**:

1. Each row must contain the digits `1-9` without repetition.
1. Each column must contain the digits `1-9` without repetition.
1. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.

### Note:

* A Sudoku board (partially filled) could be valid but is not necessarily solvable.
* Only the filled cells need to be validated according to the mentioned rules.

## Constraints:

* `board.length == 9`
* `board[i].length == 9`
* `board[i][j]` is a digit is a string with a single character: `"1"` - `"9"` or `"."`

### Example 1:

![Example 1](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)

Input:
```JavaScript
board = 
    [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]
```
Output: `true`