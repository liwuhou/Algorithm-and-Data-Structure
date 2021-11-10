/**
 * @param {string} s
 * @return {number}
 */

/** 大数据不通过，因为构建了太长的正则 */
type CountBinarySubstrings = (s: string) => number
export const countBinarySubstrings: CountBinarySubstrings = (s) => {
  let count: number = 0

  for (let i = 0; i < s.length - 1; i++) {
    if (matchBinary(s.slice(i))) {
      count++
    }
  }

  return count
}

function matchBinary(s: string): boolean {
  const [j] = s.match(/^(0+|1+)/)
  // 通过异或生成对应j长度的二进制串
  const o = (+j[0] ^ 1).toString().repeat(j.length)
  const reg = new RegExp(`^(${j}${o})`)

  return reg.test(s)
}
