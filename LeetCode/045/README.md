# 45. Jump Game II

## Links

* [View @ LeetCode](https://leetcode.com/problems/jump-game-ii/)
* [Video Walkthrough](https://youtu.be/bQlBp2Gk77w)
* [@Beautiful-TypeScript on YouTube](https://www.youtube.com/@BeautifulTypeScript)

## Probelm Statement

You are given a *0-indexed* array of integers nums of length `n`. You are initially positioned at `nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at `nums[i]`, you can jump to any `nums[i + j]` where:

* `0 <= j <= nums[i]` and
* `i + j < n`

Return the minimum number of jumps to reach `nums[n - 1]`. The test cases are generated such that you can reach `nums[n - 1]`.
