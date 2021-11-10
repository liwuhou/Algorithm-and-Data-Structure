/**
 * @param {string} s
 * @return {number}
 */

/**
 * Q: 给定一个字符串 s，计算具有相同数量 0 和 1 的非空（连续）子字符串的数量，并且这些子字符串中的所有 0 和所有 1 都是连续的。
 */

/** 按照相同的字符个数分组，寻找相邻间两个数字的最小的那个数，即这对相邻数字对答案的贡献 */
type CountBinarySubstrings = (s: string) => number
export const countBinarySubstrings: CountBinarySubstrings = (s) => {
  const counts = []

  let i = 0,
    n = s.length
  while (i < n) {
    const c = s[i]
    let count = 0
    while (i < n && s[i] === c) {
      ++count
      ++i
    }
    counts.push(count)
  }

  let ans = 0
  for (let i = 1; i < counts.length; i++) {
    ans += Math.min(counts[i - 1], counts[i])
  }
  return ans
}
