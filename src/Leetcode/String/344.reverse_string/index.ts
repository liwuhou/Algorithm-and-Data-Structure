/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
type ReverString = (s: string[]) => string[]

export const reverseString: ReverString = function (s) {
  // return s.reverse()
  let i = 0
  let j = s.length - 1
  while (i <= j) {
    let tmp = s[i]
    s[i] = s[j]
    s[j] = tmp
    i++
    j--
  }
  return s
}
