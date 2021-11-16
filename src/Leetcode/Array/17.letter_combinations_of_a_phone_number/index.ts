/**
 * @param {string} digits
 * @return {string[]}
 */
type LetterCombinations = (digits: string) => string[]

const digitsMapLetter = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z'],
]

export const letterCombinations: LetterCombinations = (digits) => {
  let [result = [], ...rest] = digits
    .split('')
    .map((item) => digitsMapLetter[+item - 2])

  do {
    result = getCombinationsResult(result, rest.shift())
  } while (rest.length)

  return result
}

function getCombinationsResult(first: string[], second: string[]): string[] {
  if (!Array.isArray(second) || !second.length) return first
  const tmp = []
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      tmp.push(first[i] + second[j])
    }
  }
  return tmp
}
